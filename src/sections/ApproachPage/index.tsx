import React, { useState, useEffect, useRef } from "react";
import ApproachStep1 from "../../assets/images/ApproachStep1.svg";
import ApproachStep2 from "../../assets/images/ApproachStep2.svg";
import ApproachStep3 from "../../assets/images/ApproachStep3.svg";
import { animated, useSprings } from "react-spring";
import "./style.css";

const divs = [
	["Discovery",
		"Our formula starts with an X-Ray analysis of your business and its internal processes in order to understand your company needs",
		ApproachStep1
	],
	["Proposal",
		"This gives you the opportunity to make sure the tailored solution we built for you is the best fit for your business",
		ApproachStep2
	],
	["Setup and Update",
		"We not only implement what we see as the best current solution for your business, but we also make sure it is updated according to the latest and best tools",
		ApproachStep3
	]
]

function ApproachPage() {
	const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(divs.map(() => React.createRef()));
	const [activeCard, setActiveCard] = useState(0);

	const handleScroll = () => {
		const scrollPosition = window.scrollY + window.innerHeight * 0.8;
		const cardPositions = cardRefs.current.map(ref => ref.current?.offsetTop);
		const activeCard = cardPositions.findIndex(pos => pos && pos < scrollPosition);
		setActiveCard(activeCard);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const cardSprings = useSprings(
		divs.length,
		divs.map((_, index) => ({
			opacity: index === activeCard ? 1 : 0.5,
			transform: `translateY(${index === activeCard ? 0 : 20}px)`,
			from: { opacity: 0.5, transform: "translateY(20px)" },
			config: { duration: 500 },
		}))
	);

	const textSprings = useSprings(
		divs.length,
		divs.map((_, index) => ({
			opacity: index === activeCard ? 1 : 0,
			from: { opacity: 0 },
			config: { duration: 500 },
		}))
	);


	return (
		<section id="approach" className="approach-section">
			<h1>How we run things</h1>
			<main className="approach-content-wrapper">
				<div className="approach-cards">
					{cardSprings.map((cardProps, index) => (
						<animated.div
							className="approach-card-wrapper"
							key={divs[index][0]}
							style={cardProps}
							ref={cardRefs.current[index]}
						>
							<div className="approach-card">
								<animated.h2 style={textSprings[index]}>{divs[index][0]}</animated.h2>
								<animated.span style={textSprings[index]}>{divs[index][1]}</animated.span>
							</div>
						</animated.div>
					))}
				</div>
			</main>
		</section>
	);
}

export default ApproachPage;