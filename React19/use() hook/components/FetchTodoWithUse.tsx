// use - hook lets us read and load resources asynchronously, such as promises or context.
// Unlike other hooks, it can be utilized in loops and conditionals.
// In certain situations it can serve as replacement for useEffect() when fetching data
// and it streamlines context usage by allowing you to use use(context) instead of useContext(context)

import { use } from "react";
// npm i react@experimental react-dom@experimental
interface Todo {
    title:string;
}

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
};

const FetchTodoWithUse = () => {
    const data : Todo = use(fetchData());
    return <h1>{data.title}</h1>;
};
// causing inifnite no of requewst being sent
export default FetchTodoWithUse;