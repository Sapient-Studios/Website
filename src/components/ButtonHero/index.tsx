import './styles.css'
import Arrow from '../../assets/images/Arrow'
import ToolsCarousel from '../ToolsCarousel'

function ButtonHero({ width, height }: { width?: string, height?: string }) {
	// &rarr; doesnt work.
	return (
		<button className='main-btn hoverable' style={{
			width: width ? width : "fit-content",
			height: height ? height : "fit-content"
		}}>
			<ToolsCarousel direction="right" speed={4}>
				<Arrow color={"#F4EFEF"} />
				<span className='get-in-touch'>
					Get in touch
				</span>
				<Arrow color={"#F4EFEF"} />
				<span className='get-in-touch'>
					Get in touch
				</span>
			</ToolsCarousel>
		</button >
	)
}

export default ButtonHero