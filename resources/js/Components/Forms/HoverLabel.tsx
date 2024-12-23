import React, {ReactNode, useState} from 'react';
import {Paragraphize, Titleize} from "@/Functions/strings";

type HoverLabelProps = {
    text: ReactNode;
    hoverText: string;
};

export default function HoverLabel({ text, hoverText }: HoverLabelProps) {
    const [isHovered, setIsHovered] = useState(false);

    if (typeof text === "string") {
        text = Titleize(text);
    }

    return (
        <div
            className="relative inline-block w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="text-gray-700 font-medium cursor-pointer">
                {text}
            </span>
            {isHovered && (
                <div className="absolute left-0 top-full mt-1 bg-gray-800 text-white text-sm p-2 rounded shadow-lg z-10 transition-opacity duration-300">
                    {Paragraphize(hoverText)}
                </div>
            )}
        </div>
    );
};

