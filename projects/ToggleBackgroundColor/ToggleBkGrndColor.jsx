import { useState} from "react";

import "./style.css";
/*
* Requirements
* Provide a button with text to toggle Change background color
* As background color changes, change button and text color
* */

const ToggleBkGrndColor = () => {
    // set initial colors to contrast text background and button
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [buttonStyle, setButtonStyle] = useState("white");

    // when button is pressed check for background color and toggle color state of everything
    // toggle text and button boundary between black and orange
    // rest everything between black and white
    function handleClick() {
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
    }

    return (
        <section style={{ backgroundColor, color: textColor }}>
            <button
                onClick={handleClick}
                style={{
                    buttonStyle,
                    color: textColor,
                    border: `2px solid ${textColor}`,
                }}
            >

                {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
            </button>
            <section className="content">
                <h1>
                    Welcome To <br/> Color change..
                </h1>
            </section>

        </section>
    );
};

export default ToggleBkGrndColor;
