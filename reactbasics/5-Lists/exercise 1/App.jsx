
const App = () => {
  const numbers = [1,2,3,4,5,6]
  return ( <main>
    {numbers.map((number) => (
      <ul key={Math.random()}>
        <li>{number}</li>
      </ul>
    ))}
  </main>
  )
}
// iterate over each number in the list and render it
// if we only use <ul> without key we will get error in console stating a list should have a unique "key" prop
// so here we are generating unique key using random function
// why its imp? it will we used when we learn about state - state allows us to change/mutate the values in a list.
// and for that to happen we need to provide unique label to each element of the list to modify it using state
// therefore using key in ul (i.e parent element to list) we descibe a function that can generate individual keys for each element of list

export default App;