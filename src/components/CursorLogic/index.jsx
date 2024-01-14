import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import './style.css';
const msg = "Keep Scrolling - Keep Scrolling - ";
const radius = 50;
const rotationSpeed = 0.8; // Adjust this value to control speed (larger number = faster rotation)
const lowerBound = 100; // Lower bound of the globe's Y position

const CustomCursor = () => {
	const [widthMatches, setWidthMatches] = useState(false);
	const [rotate, setRotate] = useState(true);
	const [cursorInitialized, setCursorInitialized] = useState(false);
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
			if (!cursorInitialized) {
				rotation += rotationSpeed; // Increment rotation
				cursorText.forEach((char, index) => {
					const angle = ((360 / cursorText.length) * index) + rotation;
					const charX = cursorPos.current.x - 3 + radius * Math.cos(angle * Math.PI / 180);
					const charY = cursorPos.current.y - 12 + radius * Math.sin(angle * Math.PI / 180);
					const charAngle = angle + 90;

					gsap.to(char, {
						x: charX + window.scrollX,
						y: charY + window.scrollY,
						rotation: charAngle,
						transformOrigin: 'center',
						duration: 0.12, // Duration of the transition
						ease: "sine.inOut",
					});
				});
				requestAnimationFrame(rotateText);
				setCursorInitialized(true);
			}
		};

		const clearRotate = () => {
			// display none cursor text
			cursorText.forEach((char, index) => {
				// set display none in classname char
				gsap.to(char, {
					opacity: 0,
					duration: 0.35,
				});
			});
		};

		const checkScroll = () => {
			// If the user has scrolled past the lower bound, stop rotating the text
			if (window.scrollY > lowerBound) {
				setRotate(false);
				cancelAnimationFrame(rotateText);
				clearRotate();
			} else {
				setRotate(true);
				rotateText();
			}
		};

		const onMouseMove = (e) => {
			let xCoord = e.clientX;
			let yCoord = e.clientY;

			if (!xCoord || !yCoord) {
				return;
			};


			if (widthMatches) {
				// Update cursor position
				cursorPos.current.x = xCoord;
				cursorPos.current.y = yCoord;

				gsap.to(bigBall, {
					x: xCoord - 22,
					y: yCoord - 23,
					duration: 0.4,
					ease: "ease-in-out",
				});

				gsap.to(smallBall, {
					x: xCoord - 5,
					y: yCoord - 18,
					duration: 0.1,
				});
			}

		};

		const onMouseHover = () => {
			gsap.to(bigBall, {
				scale: 2,
				duration: 0.3,
			});
		};

		const onMouseHoverOut = () => {
			gsap.to(bigBall, {
				scale: 1,
				duration: 0.3,
			});
		};

		if (rotate) {
			rotateText();
		}

		body.addEventListener('mousemove', onMouseMove);
		document.addEventListener('scroll', checkScroll)
		document.querySelectorAll('.hoverable').forEach((element) => {
			element.addEventListener('mouseenter', onMouseHover);
			element.addEventListener('mouseleave', onMouseHoverOut);
		});

		return () => {
			x.removeListener(togglePageCursor);
			body.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('scroll', checkScroll)
			document.querySelectorAll('.hoverable').forEach((element) => {
				element.removeEventListener('mouseenter', onMouseHover);
				element.removeEventListener('mouseleave', onMouseHoverOut);
			});
			// cancelAnimationFrame(rotateText);
		};
	}, [widthMatches]);

	return (
		<div className="cursor" ref={cursorRef} style={{ display: widthMatches ? 'block' : 'none' }}>
			<div className="cursor__ball cursor__ball--big">
				<svg height="44" width="44">
					<circle cx="22" cy="22" r="20" stroke="white" strokeWidth="1"></circle>
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
