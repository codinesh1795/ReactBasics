// props drilling

// assume the following structure App -> card -> users -Date&Time
// now lets sat app has some data that needs to be sent down till date
// one way is we can pass data using props through all components, its inefficient to maintain with high no of components

//as this can be issue when working with thousands of api - lets learn about context api to do the same effeciently 
import CompA from "./Components/CompA";

const App = () => {
  const name = 'Dinesh'

  return (
    <div>
      <h2>Nothing to render here in App</h2>
      <CompA name={name}/>
    </div>
  );
};
export default App;