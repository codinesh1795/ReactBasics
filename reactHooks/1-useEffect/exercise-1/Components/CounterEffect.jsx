import React, { useEffect,useState } from 'react'

const CounterEffect = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `Count: ${count}`
    },[count])
  return (
    <div>
        <h1>Counter Count: {count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default CounterEffect