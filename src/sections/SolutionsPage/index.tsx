import "./style.css";

function SolutionsPage({ navbarHeight }: { navbarHeight: number }) {

	const offset = -navbarHeight-1;

	return (
		<section className="solutions-section" style={{ marginTop: `${offset}px` }}>
			<main className="solutions-main">
				<h1 className="home-title">
					Explore our solutions for
					your challenges
				</h1>
			</main>
		</section>
	);
}

export default SolutionsPage;
