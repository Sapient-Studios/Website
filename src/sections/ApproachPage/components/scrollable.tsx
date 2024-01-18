import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import svgimage from '../../../assets/images/cenafixescroll.svg';
import './style.css';

function ScrollableIndicator() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const ballRef = useRef(null);
	const containerRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		if (containerRef.current && ballRef.current) {
			if (!isMobile) {
				gsap.to(ballRef.current, {
					top: '91.7%', // Animates the ball to the bottom of the container
					ease: 'none',
					scrollTrigger: {
						trigger: containerRef.current,
						end: "-=100 10%",
						start: "+=400 90%",
						scrub: true, // Enables smooth scrubbing
						markers: false,
						pinSpacing: false,
					}
				});
			} else {
				gsap.to(ballRef.current, {
					top: '88%', // Animates the ball to the bottom of the container
					ease: 'none',
					scrollTrigger: {
						trigger: containerRef.current,
						end: "-=200 5%",
						start: "+=200 70%",
						scrub: true, // Enables smooth scrubbing
						markers: false,
						pinSpacing: false,
					}
				});
			}
		}

		// get event listener for scroll
		window.addEventListener('ressize', () => {
			setIsMobile(window.innerWidth < 768);
		});

		return () => {
			window.removeEventListener('ressize', () => {
				setIsMobile(window.innerWidth < 768);
			});
		}
	}, [ballRef, containerRef]); // Add dependencies here


	return (
		<div className="scrollable-indicator" ref={containerRef}>
			<img src={svgimage} alt="scrollable indicator" className="svg-image" style={{ width: "100%", height: "100%" }} />
			<div ref={ballRef} className="scroll-ball" style={{top: `${isMobile? "8%" : "1.8%"}`}}></div>
		</div>
	);
}

export default ScrollableIndicator;
