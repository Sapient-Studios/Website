import './styles.css'
import Arrow from '../../assets/images/Arrow'
import ToolsCarousel from '../ToolsCarousel'

function ButtonHero({ width, height }: { width?: string, height?: string }) {
	// &rarr; doesnt work.
	return (
		<button className='main-btn marquee hoverable' style={{
			width: width ? width : "fit-content",
			height: height ? height : "fit-content"
		}}>
			<ToolsCarousel direction="right" speed={1}>
				<span className='main-btn-text'>
					<Arrow color={"#F4EFEF"} />Get in touch<Arrow color={"#F4EFEF"} />
				</span>
			</ToolsCarousel>
		</button >
	)
}

export default ButtonHero