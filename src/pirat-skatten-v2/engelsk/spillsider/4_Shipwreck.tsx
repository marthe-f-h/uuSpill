import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { skattekartetUrl } from '../../constants'

export const Shipwreck = () => {
	document.title = 'uu game - The shipwreck'
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="blur-sm bg-white h-screen overflow-auto p-4 pl-6 text-black">
			<div>
				<h1 tabIndex={-1} ref={headingRef} className="outline-none">
					The shipwreck
				</h1>
				<Link to={skattekartetUrl}>Go back</Link>
				<p className="mb-4">There's just a shipwreck here, go back.</p>
			</div>
		</div>
	)
}
