import Arrow from '../Arrow'
import './styles.css'

function ButtonMain({ text, width, height }: { text: string, width?: string, height?: string }) {
	// &rarr; doesnt work.
	return (
		<button className='main-btn marquee' style={{
			width: width ? width : "fit-content",
			height: height ? height : "fit-content"
		}}>
			<span className='main-btn-text'>
				<Arrow color={"#F4EFEF"} />{text}<Arrow color={"#F4EFEF"} />
			</span>
		</button >
	)
}

export default ButtonMain