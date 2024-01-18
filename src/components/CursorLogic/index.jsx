import { useState, useEffect, useRef } from 'react';
import './style.css';
import gsap from 'gsap';

const CustomCursor = () => {
	const [widthMatches, setWidthMatches] = useState(window.matchMedia("(min-width: 990px)").matches);
	const cursorRef = useRef(null);
	const cursorPos = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const body = document.body;
		const bigBall = document.querySelector('.cursor__ball--big');
		const smallBall = document.querySelector('.cursor__ball--small');
		const cursor = document.querySelector('.cursor');

		const togglePageCursor = (e) => {
			const matches = e.matches;
			setWidthMatches(matches);
			body.style.cursor = matches ? "none" : "";
			cursor.style.display = matches ? "block" : "none";
		};

		const x = window.matchMedia("(min-width: 768px)");
		togglePageCursor(x);
		x.addListener(togglePageCursor);

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

		body.addEventListener('mousemove', onMouseMove);
		document.querySelectorAll('.hoverable').forEach((element) => {
			element.addEventListener('mouseenter', onMouseHover);
			element.addEventListener('mouseleave', onMouseHoverOut);
		});

		return () => {
			x.removeListener(togglePageCursor);
			body.removeEventListener('mousemove', onMouseMove);
			document.querySelectorAll('.hoverable').forEach((element) => {
				element.removeEventListener('mouseenter', onMouseHover);
				element.removeEventListener('mouseleave', onMouseHoverOut);
			});
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
		</div>
	);
};

export default CustomCursor;
