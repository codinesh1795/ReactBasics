// context API
/*
Context API is a feature that allows you to manage and share state across your component tree without having to pass props manually at every level.
Its useful for scenarios where you need to share dat aor functions across many components, especially
when these components are deeply nested
*/

import { createContext } from "react";
import CompA from "./Components/compA";
// create context for data to be used anywhere in app
export const Data = createContext();
// now wrap the application to use the entire context
const App = () => {
  const name = 'Dinesh'

  return (
    <div>
      <Data.Provider value={name}>
        <CompA />
      </Data.Provider>
    </div>
  );
};
export default App;