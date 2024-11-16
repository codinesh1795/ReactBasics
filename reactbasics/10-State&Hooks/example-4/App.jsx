
import { useState } from "react";

const App = () => {
const [movies, setMovies] = useState ([
  {id:1, title: 'Equalizer 3',ratings: 7},
  {id:2, title: 'Spiderman 2',ratings: 8},
  {id:3, title: 'IronMan 1',ratings: 9},
])
 
const handleCick = () => {
  setMovies(movies.map((m) => m.id ===1 ? {...movies,title: "John Wick 4"} : m))
}
  return (
    <section>
      {movies.map(m => (
        <li key={Math.random()}>{m.title}</li>
      ))}
      <button onClick={handleCick}>Change Name</button>
    </section>
  );
};
// example to useState with array objects
export default App;