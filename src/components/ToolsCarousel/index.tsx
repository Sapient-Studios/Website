import React from "react";
import "./style.css";



function ToolsCarousel() {

    const tools = [
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    ]

    return (
        <div className="slider">
            <div className="slide-track">
                {tools.map((tool) => (
                    <div className="slide">
                        <img src={tool} height="100" width="250" alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToolsCarousel;