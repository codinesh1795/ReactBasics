import {useState} from "react";
import "./style.css";

/* generate ids to bind each todos to an id for displaying using map.filter later*/
function generatedId() {
    return Math.floor(Math.random() * 10);
}

const Todo = () => {

    // initialize todos empty object array so we can keep on appending todos at the end of array
    const [todos, setTodos] = useState([]);
    // something to enter a new todos value into, temporary before we submit it. eg input field state
    const [inputVal, setInputVal] = useState("");
    // once value is entered into inputfield and submitted, append the new todos to existing list and
    // reset input field to empty to allow entering new todos
    const handleSubmit = () => {
        setTodos((todos) =>
            todos.concat({text: inputVal,
            id: generatedId(),
            })
        )
        setInputVal("");
    }
    // remove an existing todos from the list
    const removeTodo = (id)=>
        setTodos((todos) => todos.filter((t) => t.id !== id ))

    return (<div className="container">
            <input
                type="text"
                onChange={(e) => setInputVal(e.target.value)}
                value={inputVal}
                placeholder="Enter Todos"
            />
            <button onClick={handleSubmit}>Submit</button>

            <ul className="todos-list">
                {todos.map(({text, id}) => (
                    <li key={id} className="todo">
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Todo;
