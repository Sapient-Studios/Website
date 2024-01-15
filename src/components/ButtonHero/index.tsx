import './styles.css'
import Arrow from '../../assets/images/Arrow'
import InfiniteLoop from '../InfiniteLoop'
import ScrollScript from '../ScrollScript'

function ButtonHero({ href, speed, width, height }: { href?:string, speed: number, width?: string, height?: string }) {
	
	return (
		
		<a href={href} onClick={ScrollScript} className='main-btn hoverable' style={{
			width: width ? width : "fit-content",
			height: height ? height : "fit-content"
		}}>
			<InfiniteLoop direction="right" speed={speed}>
				<Arrow color={"#F4EFEF"} />
				<span className='get-in-touch'>
					Get in touch
				</span>
				<Arrow color={"#F4EFEF"} />
				<span className='get-in-touch'>
					Get in touch
				</span>
			</InfiniteLoop>
		</a >

	)
}

export default ButtonHero