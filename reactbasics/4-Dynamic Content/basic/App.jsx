 
// rendering variables dynamically inside jsx using {} content
const App = () => {
  const myName = 'Dinesh yadav'
  const multiply = (a,b) => a*b
  const specialClass = 'simple-class'
  return ( <section>
    <p>
      2+2
    </p>
    <p>
      {2 + 2}
    </p>
    <h1>
      {myName}
    </h1>
    <p>My Friends list {['Shubham ','Aditya ']}</p>
    <p>2 * 2 = {multiply(2,2)}</p>
    <p className={specialClass}>This is a special class</p>
  </section>
  )
}
// we can also say we are embedding dynamic content in jsx code
export default App;