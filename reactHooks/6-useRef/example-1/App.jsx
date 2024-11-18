
/*
* useRef
* useRef hook provides a way to access and interact with DOM elements or to persist values across
* renders without causing a rerender
* */
import { useRef } from "react";

const App = () => {
    const inputElement = useRef(null)
    console.log(inputElement) // DOM object with property of current & value set to null
    // now we can manipulate the DOM however we want like in the example below

    const focusInput = () => {
        inputElement.current.focus();
        // we are using focus method which is coming from the DOM itself
        inputElement.current.value = "Dinesh"
        // directly update input field element on click
    }
    return (
        <div>
            <input type="text" ref={inputElement} />
            <button onClick={() => focusInput()}> Focus & Write Dinesh</button>
        </div>
    )
}

export default App;