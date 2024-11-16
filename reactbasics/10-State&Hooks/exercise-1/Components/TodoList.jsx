import React, { useState } from 'react'

const TodoList = () => {
    // todos will hold the array of todos values
    // setTodos will be used to append to todos list
    const [todos, setTodos] = useState([])
    // inputvalue will be used as a temporary variable to hold one value at a time, that will be submitted using button
    // setInputValue will be used to append eachkeystroke to inputValue until submit button is pressed.
    const [inputValue, setInputValue] = useState('')
    // upon clicking submit check if inputValue is not empty and append it to end of list
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            // update inputValue into todos using setTodos
            setTodos([...todos,inputValue])
            // Reset setInputValue to empty to enter new todo
            setInputValue("")
        }
    }
    // required to update InputValue at every keyStroke entered usng SetInputValue
    // eg D, Di , Din, Dine .... 
    const handleChange = (e) => {
        console.log(e.target)
        setInputValue(e.target.value);
    }
  return (
    <div>
        <h1>TodoList</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputValue} onChange={handleChange} placeholder="Add a new todo" />
            <button type="submit">Add Todo</button>
        </form>
        
        <ul>
            {todos.map((todo,index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList