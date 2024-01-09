import React from "react";

export default function PlusIcon({color, stroke, size}) {
    const halfSize = size / 2;
    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={`M${halfSize} 0V${size}`}
                stroke={color}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d={`M0 ${halfSize}H${size}`}
                stroke={color}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}