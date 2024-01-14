import './styles.css'
import Arrow from '../../assets/images/Arrow'
import ToolsCarousel from '../ToolsCarousel'

function ButtonHero({ speed, width, height }: { speed: number, width?: string, height?: string }) {
	// &rarr; doesnt work.
	return (
		<a className='main-btn hoverable' style={{
			width: width ? width : "fit-content",
			height: height ? height : "fit-content"
		}}>
			<ToolsCarousel direction="right" speed={speed}>
				<Arrow color={"#F4EFEF"} />
				<span className='get-in-touch'>
					Get in touch
				</span>
				<Arrow color={"#F4EFEF"} />
				<span className='get-in-touch'>
					Get in touch
				</span>
			</ToolsCarousel>
		</a >

	)
}

export default ButtonHero