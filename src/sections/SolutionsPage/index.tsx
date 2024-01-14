import "./style.css";
import SolutionsTable from "../../components/SolutionsTable";
import ToolsCarousel from "../../components/ToolsCarousel";
import Globe from "src/components/Globe";

import Notion from "../../assets/images/Notion.svg";
import Openai from "../../assets/images/Openai.svg";
// import Slack from "../../assets/images/Slack.svg";
import Zapier from "../../assets/images/Zapier.svg";
import Make from "../../assets/images/Make.svg";
import Slack from "../../assets/images/Slack.svg";

function SolutionsPage({ navbarHeight }: { navbarHeight: number }) {

	// to put the navbar on top of the section
	const offset = -navbarHeight - 1;

	// to offset the navbar + 2rem padding
	const padding = navbarHeight + 1 + 16 * 2; // line bug + 3rem 

	return (
		<section id="solutions" className="solutions-section" style={{ marginTop: `${offset}px`, paddingTop: ` ${padding}px` }}>
			<h2 className="solutions-title" style={{ color: "white" }}>
				Explore some our solutions <br />
				for your challenges
			</h2>
			<main className="solutions-main">
				<div className="solutions-content-wrapper">
					<SolutionsTable />
					<div className="globe">
						<Globe />
					</div>
				</div>
				<div style={{ maskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 6vw, rgb(255, 255, 255) 20vw, rgb(255, 255, 255) 80vw, rgba(0, 0, 0, 0) 94vw)`, padding: `0 6vw` }}>
					{/* , filter: `grayscale(100%)` */}
					<ToolsCarousel speed={15} direction="right">
						<div className="contentBlock contentBlock--one">
							<img src={Openai} alt="" />
						</div>
						<div className="contentBlock">
							<img src={Make} alt="" />
						</div>
						<div className="contentBlock">
							<img src={Notion} alt="" />
						</div>
						<div className="contentBlock">
							<img src={Zapier} alt="" />
						</div>
						<div className="contentBlock">
							<img src={Slack} alt="" />
						</div>
					</ToolsCarousel>
				</div>
			</main>
		</section >
	);
}

export default SolutionsPage;
