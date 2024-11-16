// state is a way to store and manage data that can change over time and affect how the
// component renders. We define state using the useState Hook, which allows you to set an
// initial value and provides a way to update the state.

// Hooks are a new addition in react 16.8, they let one use state and other react 
// features without writing a class based component

// piror to react 16.8 we use to write class based components everywhere and after introduction
// of hooks we now only write functional components as its allows managing state within a 
// functional component

// useState() hook allows us to track state in a functional component. State genreally refers to data
// or properties that need to be tracking in an application

// const [data, changeData] = useState()   - data is initialvalue, changeData is function that allows changing value of data inside useState

import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  //console.log(count);
  // if we directly modify count instead of using setCount function
  /*
  const increment = () => {
    count + 1;
    console.log(count);
  }
  const decrement = () => {
    count - 1;
    console.log(count);
  }
  */
  // without setCount the logic comes into above code, updates counts but doesnt reflects in console or browser
  // as using setCount updates state and each time state is updated, it re renders the component

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  );
};

export default App;