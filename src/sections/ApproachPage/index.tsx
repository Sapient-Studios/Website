import React, { useState, useEffect } from "react"; import "./style.css";
import ApproachStep1 from "../../assets/images/ApproachStep1.svg";
import ApproachStep2 from "../../assets/images/ApproachStep2.svg";
import ApproachStep3 from "../../assets/images/ApproachStep3.svg";

function ApproachPage() {

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


	const [ballTopPosition, setBallTopPosition] = useState("50%");

	const handleScroll = () => {
		const navbar = document.getElementById("navbar"); // Replace with the actual ID of your navbar
		const approachSection = document.getElementById("approach");

		if (navbar && approachSection) {
			const rect = approachSection.getBoundingClientRect();
			const navbarRect = navbar.getBoundingClientRect();

			if (rect.top <= navbarRect.bottom) {
				setBallTopPosition("calc(50% + " + (navbarRect.bottom - rect.top) + "px)");
			} else {
				setBallTopPosition("50%");
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);



	return (
		<section id="approach" className="approach-section">
			<h2>How we run things</h2>
			<main className="approach-content-wrapper">
				<div className="approach-cards">
					{divs.map(([title, description, imgSrc], index) => (
						<div className="approach-card-wrapper" key={title}>
							{index === 0 && /* no caso de ser a primeira div */
								<div className="ball-slider">
									<div className="ball-slot"></div>
									<div className="ball-line"></div>
								</div>
							}
							{index > 0 && index < divs.length - 1 && /* no caso de ser uma div do meio */
								<div className="ball-slider">
									<div className="ball-line"></div>
									<div className="ball-slot"></div>
								</div>
							}
							{index === divs.length - 1 && /* no caso de ser a ultima div */
								<div className="ball-slider">
									<div className="ball-line"></div>
									<div className="ball-slot"></div>
								</div>
							}
							<div className="approach-card">
								<h3>{title}</h3>
								<span >{description}</span>
							</div>
							<img src={imgSrc} alt="" />
						</div>
					))}
				</div>
				<div id="ball" style={{ top: ballTopPosition }}></div>
			</main>
		</section>
	);
}

export default ApproachPage;
