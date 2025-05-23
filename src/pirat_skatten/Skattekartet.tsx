import { Link } from 'react-router-dom'
import img from './Skattekart.png'

function Skattekartet() {
	document.title = 'uu spill - skattekartet'
	return (
		<div>
			<Link to={'/uu-spill'}>Gå tilbake til skipsvraket</Link>
			<h1>Skattekartet</h1>
			<img
				src={img}
				alt="Skattekart som viser veien fra skuta, rundt palmetreet og frem til grotten der skatten er."
				width="500"
			></img>
			<p>STOP HER TIL DET ER KLART TIL Å GÅ VIDERE</p>
			<Link to={'/uu-spill'}>Gå til skipsvraket</Link>{' '}
			<Link to={'/uu-spill'}>Gå til havet</Link>{' '}
			<Link to={'/uu-spill/papegoyensHemmelighet'}>Gå til grotten</Link>
		</div>
	)
}

export default Skattekartet
