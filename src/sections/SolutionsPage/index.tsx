import "./style.css";
import SolutionsTable from "../../components/SolutionsTable";
import ToolsCarousel from "../../components/ToolsCarousel";

function SolutionsPage({ navbarHeight }: { navbarHeight: number }) {

	// to put the navbar on top of the section
	const offset = -navbarHeight - 1;

	// to offset the navbar + 3rem padding
	const padding = navbarHeight + 1 + 16 * 3; // line bug + 3rem 

	return (
		<section className="solutions-section" style={{ marginTop: `${offset}px`, paddingTop: ` ${padding}px` }}>
			<main className="solutions-main">
				<div className="solutions-content-wrapper">
					<h2 className="solutions-title">
						Explore our solutions for <br />
						your challenges
					</h2>
					<SolutionsTable />
				</div>

				{/* p5? */}

			</main>

			<ToolsCarousel />

		</section>
	);
}

export default SolutionsPage;
