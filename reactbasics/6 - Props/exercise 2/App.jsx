import Person from "./Components/Person";
import Product from "./Components/Product";

const App = () => {
  return (
    <div>
      <Person name="Dinesh" age={30}/>
      <Product name="One Plus 9" price={38000} />
    </div>
  );
};

export default App;