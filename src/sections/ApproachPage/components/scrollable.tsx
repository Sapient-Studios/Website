import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import svgimage from '../../../assets/images/cenafixescroll.svg';
import './style.css';

function ScrollableIndicator() {
	const ballRef = useRef(null);
	const containerRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);


	useEffect(() => {
		if (containerRef.current && ballRef.current) {
			gsap.to(ballRef.current, {
				top: '91.7%', // Animates the ball to the bottom of the container
				ease: 'none',
				scrollTrigger: {
					trigger: containerRef.current,
					end: "+=700 10%",
					start: "+=000 90%",
					scrub: true, // Enables smooth scrubbing
					markers: true,
					pinSpacing: false,
					toggleActions: "play none none reverse",
				}
			});
		}
	}, [ballRef, containerRef]); // Add dependencies here


	return (
		<div className="scrollable-indicator" ref={containerRef}>
			<img src={svgimage} alt="scrollable indicator" className="svg-image" style={{ width: "100%", height: "100%" }} />
			<div ref={ballRef} className="scroll-ball"></div>
		</div>
	);
}

export default ScrollableIndicator;
