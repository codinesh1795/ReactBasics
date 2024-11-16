
const App = () => {
  const usersInfo = [
         {
           username: "HuXn",
           email: "test@gmail.com",
           location: "USA",
         },
         {
           username: "John",
           email: "jd@gmail.com",
           location: "Arab",
         },
         {
           username: "Alex",
           email: "alexmersion@gmail.com",
           location: "India",
         },
       ];
  /* method 1 without destructuring
  return ( <main>
    {usersInfo.map((user) => (
      <ul key={Math.random()}>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.location}</li>
      </ul>
    ))}
      
  </main>
  )
  */
 // with destructuring
  return ( <main>
    {usersInfo.map(({username, email, location}) => (
      <ul key={Math.random()}>
        <li>{username}</li>
        <li>{email}</li>
        <li>{location}</li>
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