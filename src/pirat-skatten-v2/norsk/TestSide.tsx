import {
	Alert,
	BodyShort,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Link,
	TextField
} from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { basePath } from '../constants'
import img from '../blueberry.png'

export const TestSide = () => {
	const [visAlert, setVisAlert] = useState(false)
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (headingRef.current) {
			headingRef.current.focus()
		}
	}, [])

	return (
		<div className="flex flex-col gap-4 bg-white h-screen overflow-auto p-4 pl-6 text-black">
			<Heading
				level="1"
				size="medium"
				className="outline-none"
				tabIndex={-1}
				ref={headingRef}
			>
				Testside
			</Heading>
			<Link as={RouterLink} to={basePath} className="w-fit">
				Gå tilbake
			</Link>

			<BodyShort>Prøv deg frem med skjermleser</BodyShort>

			<Button
				size="small"
				className="w-fit"
				onClick={() => setVisAlert(!visAlert)}
			>
				Trykk på meg
			</Button>

			{visAlert && (
				<Alert size="small" variant="info" role="alert">
					Du har trykket på knappen!
				</Alert>
			)}

			<div>
				<CheckboxGroup legend="Checkbox" size="small">
					<Checkbox value="car">1</Checkbox>
					<Checkbox value="taxi">2</Checkbox>
				</CheckboxGroup>
			</div>

			<div className="border border-[#A86400] p-4 w-fit">
				<p aria-hidden>Bilde</p>
				<img src={img} alt="3 blåbær" className="sr-only"></img>
			</div>

			<TextField label="Skriv noe" size="small" className="w-[24rem]" />
		</div>
	)
}
