import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import './style.css';
const msg = "Keep Scrolling - Keep Scrolling - ";
const radius = 70;
const rotationSpeed = 0.8; // Adjust this value to control speed (larger number = faster rotation)

const CustomCursor = () => {
	const [widthMatches, setWidthMatches] = useState(false);
	const cursorRef = useRef(null);
	const cursorPos = useRef({ x: 0, y: 0 });
	let rotation = 0;

	useEffect(() => {
		const bigBall = document.querySelector('.cursor__ball--big');
		const smallBall = document.querySelector('.cursor__ball--small');
		const body = document.body;
		const cursor = document.querySelector('.cursor');
		const cursorText = cursor.querySelectorAll('.char');

		const togglePageCursor = (e) => {
			const matches = e.matches;
			setWidthMatches(matches);
			body.style.cursor = matches ? "none" : "";
			cursor.style.display = matches ? "block" : "none";
		};

		const x = window.matchMedia("(min-width: 768px)");
		togglePageCursor(x);
		x.addListener(togglePageCursor);

		// Function to rotate the text
		const rotateText = () => {
			rotation += rotationSpeed; // Increment rotation
			cursorText.forEach((char, index) => {
				const angle = ((360 / cursorText.length) * index) + rotation;
				const charX = cursorPos.current.x - 3 + radius * Math.cos(angle * Math.PI / 180);
				const charY = cursorPos.current.y - 14 + radius * Math.sin(angle * Math.PI / 180);
				const charAngle = angle + 90;

				gsap.set(char, {
					x: charX,
					y: charY,
					rotation: charAngle,
					transformOrigin: 'center'
				});
			});
			requestAnimationFrame(rotateText);
		};

		const onMouseMove = (e) => {
			if (widthMatches) {
				// Update cursor position
				cursorPos.current.x = e.clientX;
				cursorPos.current.y = e.clientY;

				gsap.to(bigBall, {
					x: e.clientX - 16,
					y: e.clientY - 18,
					duration: 0.4,
					ease: "ease-in-out",
				});

				gsap.to(smallBall, {
					x: e.clientX - 1,
					y: e.clientY - 13,
					duration: 0.1,
				});
			}
		};

		const onMouseHover = () => {
			gsap.to(bigBall, {
				scale: 2.25,
				duration: 0.3,
			});
		};

		const onMouseHoverOut = () => {
			gsap.to(bigBall, {
				scale: 1,
				duration: 0.3,
			});
		};

		rotateText(); // Start rotating text
		body.addEventListener('mousemove', onMouseMove);
		body.addEventListener('scroll', onMouseMove)
		document.querySelectorAll('.hoverable').forEach((element) => {
			element.addEventListener('mouseenter', onMouseHover);
			element.addEventListener('mouseleave', onMouseHoverOut);
		});

		return () => {
			x.removeListener(togglePageCursor);
			body.removeEventListener('mousemove', onMouseMove);
			body.removeEventListener('scroll', onMouseMove)
			document.querySelectorAll('.hoverable').forEach((element) => {
				element.removeEventListener('mouseenter', onMouseHover);
				element.removeEventListener('mouseleave', onMouseHoverOut);
			});
			cancelAnimationFrame(rotateText);
		};
	}, [widthMatches]);

	return (
		<div className="cursor" ref={cursorRef} style={{ display: widthMatches ? 'block' : 'none' }}>
			<div className="cursor__ball cursor__ball--big">
				<svg height="40" width="40">
					<circle cx="20" cy="20" r="20" strokeWidth="0"></circle>
				</svg>
			</div>
			<div className="cursor__ball cursor__ball--small">
				<svg height="10" width="10">
					<circle cx="5" cy="5" r="5" strokeWidth="0"></circle>
				</svg>
			</div>
			<div className="cursor-text">
				{msg.split("").map((char, index) => (
					<span className="char" key={index}>
						{char}
					</span>
				))}
			</div>
		</div>
	);
};

export default CustomCursor;
