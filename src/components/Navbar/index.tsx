import { useEffect, useRef } from 'react';
import IconMain from '../IconMain';
import './styles.css';

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
		</nav>
	);
}

export default Navbar;