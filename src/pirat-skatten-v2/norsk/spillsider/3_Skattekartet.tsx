import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { havetUrl, grottenUrl, skipsvraketUrl } from '../../constants'
import img from '../../map.png'

function Skattekartet() {
	document.title = 'uu spill - skattekartet'
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="blur-sm bg-white h-screen overflow-auto p-4 pl-6 text-black">
			<h1 tabIndex={-1} ref={headingRef} className="outline-none">
				Skattekartet
			</h1>
			<p>
				Det blir vanskeligere for deg å se, du har et skattekart over
				øya, fort deg å les det før du ikke kan se mer.
			</p>
			<img
				src={img}
				alt="Skattekart som viser veien fra skuta, rundt palmetreet og frem til grotten der skatten er."
				width="500"
				className="blur-lg"
			></img>
			<Link to={skipsvraketUrl}>Gå til skipsvraket</Link>{' '}
			<Link to={havetUrl}>Gå til havet</Link>{' '}
			<Link to={grottenUrl}>Gå til grotten</Link>
		</div>
	)
}

export default Skattekartet
