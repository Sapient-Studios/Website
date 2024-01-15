import { useState, useEffect } from 'react';
import "./style.css";
import ButtonHero from "src/components/ButtonHero";
import HeroLogo from "src/assets/images/HeroLogo.svg";
import HeroCurves from "../../assets/images/HeroCurves.svg";
import KeepScrolling from "src/components/KeepScrolling";
import ScrollScript from "src/components/ScrollScript";

function HeroPage() {
	const [gradientStyle1, setGradientStyle1] = useState({});
	const [gradientStyle2, setGradientStyle2] = useState({});

	const handleMouseMove = (event: any) => {
		const { clientX, clientY } = event;
		// the center of the screen is a sphere. get me the angle between the center and the mouse

		// get the coordinates of hero-gradient-text class
		const gradientText = document.querySelector('.hero-gradient-text');
		const gradientText2 = document.querySelector('.hero-gradient-text2');
		const gradientTextRect = gradientText?.getBoundingClientRect();
		const gradientText2Rect = gradientText2?.getBoundingClientRect();
		if (!gradientTextRect || !gradientText2Rect) {
			return;
		}

		// get the center of the hero-gradient-text class
		const center1X = gradientTextRect?.left + gradientTextRect?.width / 2;
		const center1Y = gradientTextRect?.top + gradientTextRect?.height / 2;

		const center2X = gradientText2Rect?.left + gradientText2Rect?.width / 2;
		const center2Y = gradientText2Rect?.top + gradientText2Rect?.height / 2;


		// get the angle in rad between the center and the mouse
		const angleRad1 = Math.atan2(clientY - center1Y, clientX - center1X);
		const angleRad2 = Math.atan2(clientY - center2Y, clientX - center2X);

		//now calculate distance in % between the center and the mouse
		const distance1 = Math.sqrt(
			Math.pow(clientX - center1X, 2) + Math.pow(clientY - center1Y, 2)
		);

		const distance2 = Math.sqrt(
			Math.pow(clientX - center2X, 2) + Math.pow(clientY - center2Y, 2)
		);

		// calculate % of distance, max value is 1500, if its >1500, it will be 0% and if its 0, it will be 100%
		const distancePercent1 = Math.min(distance1 / 1500, 1);
		const distancePercent2 = Math.min(distance2 / 1500, 1);


		setGradientStyle1({
			// background: `linear-gradient(${angleRad1}rad, #0a69e6aa, #1bf4f9)`, take into acount the distance in the alpha of the firt color
			background: `linear-gradient(${angleRad1}rad, rgba(10, 105, 230, ${1 - distancePercent1}), #1bf4f9)`,
			// textShadow: `0 0 5px rgba(10, 105, 230, ${1 - distancePercent1})`,
		});

		setGradientStyle2({
			background: `linear-gradient(${angleRad2}rad, rgba(10, 105, 230, ${1 - distancePercent2}), #1bf4f9)`,
			// textShadow: `0 0 5px rgba(10, 105, 230, ${1 - distancePercent2})`,
		});
	};

	useEffect(() => {
		// check if in user is in touch device
		const isTouchDevice = 'ontouchstart' in document.documentElement;
		if (isTouchDevice) {
			return;
		}
		handleMouseMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('touchmove', handleMouseMove)
		window.addEventListener('resize', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('touchmove', handleMouseMove);
			window.removeEventListener('resize', handleMouseMove);
		};
	}, []);

	return (

		<section className='hero-section' onMouseMove={handleMouseMove} style={{ backgroundImage: `url(${HeroCurves})` }}>
			{/* <HeroCurves style=""/> */}
			<div className="hero-header">
				<img src={HeroLogo} />
			</div>
			<main className="hero-main">
				<h1 className="hero-title">
					Making your <span className="test" >business</span> <br />
					<span className="test" >efficient</span> with AI
				</h1>
				{/* <h1 className="hero-title">
					<span className="test">business</span>
				</h1> */}

				<ButtonHero href="#contact" speed={8} width="12rem" height="3rem" />
			</main>
			<a href='#solutions' className='keep-scrolling-container hoverable' onClick={ScrollScript}>
				<KeepScrolling/>
			</a>
		</section>
	);
}

export default HeroPage;
