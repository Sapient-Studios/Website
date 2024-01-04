import React, { useState, useEffect} from "react";
import "./styles.css";
import Arrow from '../../assets/images/Arrow'

function ButtonNav() {

    const [sourceDivWidth, setSourceDivWidth] = useState(0);

    useEffect(() => {
        // Get the width of the source div
        const sourceDiv = document.getElementById("width-ruler");
        const width = sourceDiv ? sourceDiv.offsetWidth : 0;

        // Set the max width of the target div
        setSourceDivWidth(width);
    }, []); // Empty dependency array ensures the effect runs once after initial render

    return (
        <button className='nav-btn' style={{ width: `${sourceDivWidth}px`}}>
            <div className="nav-btn-slider">
                <span id="width-ruler" className='nav-btn-text'>
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