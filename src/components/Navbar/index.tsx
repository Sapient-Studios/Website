import { useEffect, useRef } from 'react';
import './styles.css';
import NavIcon from '../../assets/images/NavIcon.svg';
import ButtonNav from '../ButtonNav';
import ButtonHero from '../ButtonHero';
import ScrollScript from "src/components/ScrollScript";

function Navbar({ onHeightChange }: { onHeightChange: (height: number) => void }) {
	const navbarRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (navbarRef.current) {
			onHeightChange(navbarRef.current.clientHeight);
		}
	}, [onHeightChange]);

	return (
		<nav id='navbar' ref={navbarRef}>
			<div className='navbar-container'>
				<a href="#landing" className='navbar-logo-wrapper hoverable' onClick={ScrollScript}>
					<img src={NavIcon} />
				</a>
				<div className='navbar-links desktop'>
					<a href='#solutions' className='hoverable' onClick={ScrollScript}>Solutions</a>
					<a href='#approach' className='hoverable' onClick={ScrollScript}>Approach</a>
					{/* <a></a> */}
				</div>
				<div className='contact-wrapper desktop' style={{ height: "100%", position: "relative" }}>
					<ButtonHero href="#contact" speed={8} width={10} height={2.6} color1="#171716" color2='#1bf4f9' />
				</div>
				<div className="hamburger">
					<div className="burger burgerl" />
					<div className="burger burger2" />
					<div className="burger burger3" />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;