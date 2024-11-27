import {useEffect, useState} from "react";

import "./style.css";
// Requirements
/*
* display all numbers, operators visible in a calculator
* clear function to reset equation state to empty
* input field which holds the state of equation to be calculated
* when equal to is pressed display output
* */

const CalculatorApp = () => {
    // assume equation to be a string initialize empty
    const [inputValue, setInputValue] = useState("");
    // on each button press we need to display the value entered / appended to current equation state
    function display (value) {
        setInputValue(inputValue + value);
    }
    // add clear function
    function clear (){
        setInputValue("");
    }
    function calculate () {
        var ans = eval(inputValue)
        // to display answer setInputvalue to ans
        setInputValue(ans)
    }
    // create calculator ui where each input is of type button when pressed
    // causes displaying that number in input field
    // modifying button to span for better styling
    return (<form className="calculator">
            <input type="text" value={inputValue} class="value"/>

            <span onClick={() => display("1")}>1</span>
            <span onClick={() => display("2")}>2</span>
            <span onClick={() => display("3")}>3</span>
            <span onClick={() => display("/")}>/</span>


            <span onClick={() => display("4")}>4</span>
            <span onClick={() => display("5")}>5</span>
            <span onClick={() => display("6")}>6</span>
            <span onClick={() => display("-")}>-</span>

            <span onClick={() => display("7")}>7</span>
            <span onClick={() => display("8")}>8</span>
            <span onClick={() => display("9")}>9</span>
            <span onClick={() => display("*")}>*</span>

            <span onClick={() => display("0")}>0</span>
            <span onClick={() => display("00")}>00</span>
            <span onClick={() => display(".")}>.</span>
            <span className="plus" onClick={() => display("+")}>+</span>

            <span className="num equal" onClick={() => calculate()}>=</span>
            <span className="num clear" onClick={() => clear()}>clear</span>
        </form>
    );
};

export default CalculatorApp;
