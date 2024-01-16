import './styles.css'
import Arrow from '../../assets/images/Arrow'
import InfiniteLoop from '../InfiniteLoop'
import ScrollScript from '../ScrollScript'

function ButtonHero({ href, speed, width, height, color1, color2 }: { href?: string, speed: number, width: number, height: number, color1: string, color2: string }) {
	const fontSize = height * (1.25 / 3);
	console.log("fontSize " + fontSize);
	const padding = (height - fontSize) / 3;
	console.log("padding " + padding);
	const paddingString = `${padding}rem`;

	return (

		<a href={href} onClick={ScrollScript} className='main-btn hoverable' style={{
			width: width ? `${width}rem` : "fit-content",
			height: height ? `${height}rem` : "fit-content",
			border: `1px solid ${color1}`,
			color: `${color1}`,
			backgroundColor: `${color2}`,
			paddingTop: paddingString,
		}}>

			<InfiniteLoop direction="right" speed={speed}>
				{/* <Arrow color={"#F4EFEF"} /> */}
				<Arrow color={color1} />
				<span className='get-in-touch' style={{ fontSize: `${fontSize}rem` }}>
					Get in touch
				</span>
				<Arrow color={color1} />
				<span className='get-in-touch'  style={{ fontSize: `${fontSize}rem` }}>
					Get in touch
				</span>
			</InfiniteLoop>
		</a >

	)
}

export default ButtonHero