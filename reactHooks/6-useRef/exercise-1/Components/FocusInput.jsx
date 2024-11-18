import { useRef } from "react";

const FocusInput = () => {
    const inputElement = useRef(null)
    const focusInput = () => {
        if(inputElement.current){
            inputElement.current.focus()
        }
    }
    return (
        <div>
            <input type="text" ref={inputElement} />
            <button onClick={() => focusInput()}> Focus Input</button>
        </div>
    )
}

export { FocusInput };