import './styles.css'
import Arrow from '../Arrow'

function ButtonHero({ width, height }: {width?: string, height?: string }) {
	// &rarr; doesnt work.
	return (
		<button className='main-btn marquee' style={{
			width: width ? width : "fit-content",
			height: height ? height : "fit-content"
		}}>
			<span className='main-btn-text'>
				<Arrow color={"#F4EFEF"} />Get in touch<Arrow color={"#F4EFEF"} />
			</span>
		</button >
	)
}

export default ButtonHero