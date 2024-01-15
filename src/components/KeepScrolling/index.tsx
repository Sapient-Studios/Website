import React from "react";
// import { renderToString } from "react-dom/server";
import "./style.css";
import Arrow from "src/assets/images/Arrow";
import KeepScrollingCircle from "src/assets/images/KeepScrollingCircle.svg";

export default function KeepScrolling() {

    return (
        <div className="keep-scrolling">
            {/*  style={{ backgroundImage: `url(${KeepScrollingCircle})`}} */}
            {/* <img src={KeepScrollingCircle} /> */}
            <Arrow color="#ffffff"/>
        </div>
    )
}
