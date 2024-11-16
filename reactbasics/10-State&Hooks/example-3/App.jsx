
import { useState } from "react";

const App = () => {
const [movie, setMovie] = useState ({
  title: 'Equalizer 3',
  ratings: 7,
})
/* Longer way to do update
const handleCick = () => {
  const copyMovie = { ...movie, ratings:5}
  setMovie(copyMovie);
}
  */
// shorter way
const handleCick = () => {
  setMovie({...movie, ratings:5});
}
  return (
    <section>
      <h1>Title: {movie.title}</h1>
      <p>Ratings: {movie.ratings}</p>
      <button onClick={handleCick}>Update Ratings</button>
    </section>
  );
};
// example to useState with objects
export default App;