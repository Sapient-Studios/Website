import { useEffect, useRef } from 'react';
import './styles.css';
import NavIcon from '../../assets/images/NavIcon.svg';
import ButtonNav from '../ButtonNav';
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
			<a href="#landing" className='navbar-logo-wrapper hoverable' onClick={ScrollScript}>
				<img src={NavIcon} />
			</a>
			<div className='navbar-links'>
				<a href='#solutions' className='hoverable' onClick={ScrollScript}>Solutions</a>
				<a href='#approach' className='hoverable' onClick={ScrollScript}>Approach</a>
				{/* <a></a> */}
			</div>
			<ButtonNav />
		</nav>
	);
}

export default Navbar;