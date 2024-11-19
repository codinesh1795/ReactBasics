/*
* useId - hook is used to generate unique IDs for components in react
*/
import UniqueId from "./Components/UniqueId.jsx";
const App = () => {

    return (
        <div>
            <UniqueId/>
            <p>lord of rings</p>
            <UniqueId/>
        </div>
    )
    // you will notice that we are reusing the unique id component second time but this time ids generated
    // are different from first used uniqueId component
}
export default App;