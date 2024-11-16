/*
useEffect  hook allows one to perform side effets in components. Some examples of 
side effects are: fetching data, directly updating DOM etc
Things to keep in mind while using useEffect
1) Without the depencency array callback function is called on every single render -- seems highly ineffecient
2) Never use useEffect inside a conditional statement, use conditional statement within useEffect
3) If dependecy array is empty, the function inside useEffect is only fired on the initial component render and not on when the component changes
4) If we provide some sort of value of a state in a dependecy array, the component will rerender anytime the state value is changed, and callback function will fire
*/
/*
We setup useEffect hook to run some code When
a) Component renders for the first time
b) whenever component rerenders
c) or some data in our component is changed 
*/
import { useState, useEffect } from "react";
// in console we can see call useEffect being called twice, due to using StrictMode in main.jsx
const App = () => {
  const [value,setValue] = useState(0);
  // we can also add multiple dependecies in a array
  const [some,setSome] = useState(0)
  useEffect(() => {
    console.log('call useEffect')
    document.title = `Increment ${value}`
  },[value,some])
  // anytime value is changed the callback function will be called and component rerendered, but
  // anytime some other logic rerenders our component without changing value the callback function will not be called
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value+1)}>Click Me</button>
      <button onClick={() => setSome(some+1)}>Something</button> 
    </div>
  );
};
export default App;