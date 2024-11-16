 import Greeting from "./Components/Greeting"
 import ProductInfo from "./Components/ProductInfo";
// rendering variables dynamically inside jsx using {} content
const App = () => {

  return ( <div>
    <Greeting />
    <ProductInfo />
  </div>
  )
}
// we can also say we are embedding dynamic content in jsx code
export default App;