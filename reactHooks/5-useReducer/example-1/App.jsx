/*
* useReducer() is a hook that is similar to useSate, but its designed for more complex state objects or state transitions
* that involves multiple sub values. It allows you to manage state in a functional, immutable way.
*
* const [state,dispatch] = useReducer(reducer,initialState)
* initialState - its the starting value for the component when it renders for the first time
* reducer funtion - this is a function that describes how the state should change based on actions. It takes
*                   the current state and an action as inputs and returns a new state
* state - the current state value which you can use in your component
* dispatch - A function you call to send actions to the reducer which then updates the state
* */
import {useReducer} from "react";

const initialState = {count: 0,count2: 0, multi :1};

const reducer = (state, action) => {
    // what are we updating and how are we updating - state, action
    switch (action.type) {
       case "increment":
           return { ...state, count: state.count + 1, count2: state.count2 + 2, multi: state.multi * 2 };
       case "decrement":
           return { ...state, count: state.count - 1, count2: state.count2 - 2, multi: state.multi / 2 };
        case "reset":
            return { ...state, count: 0, count2: 0, multi: 1 };
       default:
           return state;
    }
}
const App = () => {
    const [state, dispatch ] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            <h1>Count : {state.count}</h1>
            <h1>Count+2 : {state.count2}</h1>
            <h1>Count*2 : {state.multi}</h1>
        </div>
    )
}

export default App;