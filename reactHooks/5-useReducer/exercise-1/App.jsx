// exercise useReducer
/*
* Task 1 - create a js file and define reducer function that will manage a simple counter state
* Task 2 - create a functional component Counter and use useReducer hook to manage state of counter
* Task3 - modify the js file to add more actions for increasing decreasing by specific amount
* Task 4 - update counter file to allow user to increase and decrease count by sepcific vaule using input field
* Task5 - in app render counter component
* */
import Counter from "./Components/Counter.jsx"

const App = () => {


    return (
        <div>
            <Counter />
        </div>
    )
}

export default App;