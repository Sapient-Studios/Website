import { useEffect, useRef } from 'react';
import './styles.css';
import IconMain from '../../assets/images/IconMain';
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
				<IconMain />
			</div>
			<div className='navbar-links'>
				<a>Solutions</a>
			</div>
			<ButtonNav />
		</nav>
	);
}

export default Navbar;