import gsap from 'gsap';
import ApproachStep1 from '../../assets/images/ApproachStep1.svg';
import ApproachStep2 from '../../assets/images/ApproachStep2.svg';
import ApproachStep3 from '../../assets/images/ApproachStep3.svg';
import ScrollableIndicator from "./components/scrollable";
import './style.css';
import { useEffect, useRef } from 'react';


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

const ApproachCard = ({ title, content }: { title: string, content: string }) => {
	const cardRef = useRef(null);

	const handleScroll = () => {
		if (cardRef.current) {
			const rect = (cardRef.current as any).getBoundingClientRect();
			const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

			gsap.to(cardRef.current, {
				opacity: isInView ? 1 : 0,
				duration: 1, // Duration of the fade effect
				delay: 0.5 // Delay before the fade effect kicks in
			});
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div ref={cardRef} className="approach-card-wrapper">
			<div className="approach-card">
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
		</div>
	);
};


function ApproachPage() {
	return (
		<section id="approach" className="approach-section">
			<h1>How we run things</h1>
			<main className="approach-content-wrapper">
				<ScrollableIndicator />
				<div className="approach-cards">
					{divs.map((div, index) => (
						<ApproachCard
							key={div[0]}
							title={div[0]}
							content={div[1]}
						/>
					))}
				</div>
			</main>
		</section>
	);
}

export default ApproachPage;