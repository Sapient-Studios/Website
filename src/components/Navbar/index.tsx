import { useEffect, useRef } from 'react';
import './styles.css';
import NavIcon from '../../assets/images/NavIcon.svg';
import ButtonNav from '../ButtonNav';

function Navbar({ onHeightChange }: { onHeightChange: (height: number) => void }) {
	const navbarRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (navbarRef.current) {
			onHeightChange(navbarRef.current.clientHeight);
		}
	}, [onHeightChange]);

	return (
		<nav id='navbar' ref={navbarRef}>
			<div className='navbar-logo-wrapper'>
				<img src={NavIcon} />
			</div>
			<div className='navbar-links'>
				<a href='/#solutions' className='hoverable'>Solutions</a>
				<a href='/#approach' className='hoverable'>Approach</a>
				{/* <a></a> */}
			</div>
			<ButtonNav />
		</nav>
	);
}

export default Navbar;