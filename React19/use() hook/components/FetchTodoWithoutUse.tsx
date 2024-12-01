
import { useState, useEffect } from "react";

interface Todo {
    title:string;
}
const FetchTodoWithoutUse = () => {
    const [todo, setTodo] = useState<Todo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
                const data : Todo = await res.json();
                setTodo(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) <h1>Loading...</h1>;

    return (
        <div>
            <h1>{todo?.title}</h1>
        </div>
    );
};

export default FetchTodoWithoutUse;