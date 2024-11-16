
import { useState } from "react";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";


const App = () => {

const [count, setCount] = useState (0)

  return (
    <section>
      <Comp1 count={count} onClickHandler={() => setCount(count + 1)}/>
      <Comp2 count={count} onClickHandler={() => setCount(count - 1)}/>
      
    </section>
  );
};
// example to useState with array objects
export default App;