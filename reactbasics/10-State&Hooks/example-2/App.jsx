
import { useState } from "react";

const App = () => {

  const [family, setFamily] = useState(['Dinesh','Pooja','Neeraj'])
  // to addFamily member to existing array, first destructure the array and add entry at last
  const addOneFamilyMember = () => setFamily([...family,"Bhabhi"])
  const removeOneMember = () => setFamily(family.filter ((f) => f !== 'Dinesh'))
  const updateName = () => setFamily(family.map ((f) => f === 'Dinesh' ? "Dinesh Yadav": f))
  return (
    <section>
      {family.map(f=> (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOneFamilyMember}>Add family member</button>
      <button onClick={removeOneMember}>Remove family member</button>
      <button onClick={updateName}>Update Name</button>
    </section>
  );
};
// example to useState with arrays
export default App;