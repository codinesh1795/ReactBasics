 
 // how to create components method 1 using function
 /*
 function App () {

 }
 */
// or 2nd way below using const & arrow function
/* 
const App = () => {
  return <h1>hello</h1>;
 };
 // run npm dev, when we go into browser we see error as we created the component but didnt export it yet

 export default App;
*/
// below is how we import a component from the export file
import Greet from "./Components/Greet";
// below is how we use a component in our App
const App = () => {
  return <Greet />
}
// now we export overall App component that also contains Greet component
export default App;