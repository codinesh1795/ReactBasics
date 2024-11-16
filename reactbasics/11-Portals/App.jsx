// Portal is a feature that allows you to render a child component into a DOM node that exists
// outside the hierarchy of parent component. This cna be useful for scenarios like modals, tooltips
// or dropdowns, where you want to break out of usual parent-child structure and render in a 
// different part of DOM
import CopyInput from "./Components/CopyInput";

const App = () => {
  return (
    <div>
      <CopyInput />
    </div>
  );
};
export default App;