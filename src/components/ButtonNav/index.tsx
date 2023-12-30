import React, { useEffect, useRef } from "react";
import "./styles.css";
import Arrow from '../Arrow'

function ButtonNav({ onWidthChange }: { onWidthChange: (wdith: number) => void }) {

    const navbarBtnRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (navbarBtnRef.current) {
			onWidthChange(navbarBtnRef.current.clientHeight);
		}
	}, [onWidthChange]);


    return (
        <button className='nav-btn'>
            <div className="nav-btn-slider" style={{}}>
                <span className='nav-btn-text' ref={navbarBtnRef}>
                    <Arrow color={"#171716"} />Get in touch<Arrow color={"#171716"} />
                </span>
                <span className='nav-btn-text'>
                    <Arrow color={"#171716"} />Get in touch<Arrow color={"#171716"} />
                </span>
                <span className='nav-btn-text'>
                    <Arrow color={"#171716"} />Get in touch<Arrow color={"#171716"} />
                </span>
                <span className='nav-btn-text'>
                    <Arrow color={"#171716"} />Get in touch<Arrow color={"#171716"} />
                </span>
            </div>
        </button >
    )
}

export default ButtonNav