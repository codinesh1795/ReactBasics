/*
* Custom Hooks- are JS functions that start with the prefix use like useFetch, useForm etc and can call
* other hooks within them. They allow you to extract and reuse logic that involves state or side effects,
* making your components more readable and maintainable.
*
import {useState,useEffect} from "react";

const App = () => {
    const [data,setData] = useState(null)

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res => res.json())
        .then((data) => setData(data));
    },[])


    return (
        <div>
            {data && data.map(item => {
                return <p key={item.id}>{item.title}</p>
            })}
        </div>
    )
}
*/
// now assume if we have to use the same logic in many different components, how do we do that?
// we can move all this logic in a custom hook function and call with url required and return respective data

import useFetch from "./useFetch.jsx";
const App = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/")

    return (
        <div>
            {data && data.map(item => {
                return <p key={item.id}>{item.title}</p>
            })}
        </div>
    )
}
export default App;