// useContext hook
/*
useContext Hook allows us to access the context values provided by a Context object
directly within a functional component. Context provides a way to pass data through
the component tree without having to pass props down manually at every level.
*/

import { createContext } from "react";
import CompA from "./Components/compA";
// create context for data to be used anywhere in app
export const Data = createContext();
export const Data1 = createContext();
// now wrap the application to use the entire context
const App = () => {
  const name = 'Dinesh'
  const age = 28;
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <CompA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};
export default App;