// just adds a button ui but does nothing on clicking button
/*
const Button = () => {
  return <button>Click</button>
}
  */
// now to add click functionality we need to add an eventhandler for the button that start with on*
/*
const Button = () => {
  return <button onClick={() => console.log('button clicked')}>Click</button>
}
*/
// now we can also add a seprate function to handle the onClick event like below
const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random()*100))
  return <button onClick={handleClick}>Click</button>
}

const Copy = () => {
  // if someone does ctrl+c it will throw the following message
  const copyHandler = () => console.log("Hello dont copy")
  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente voluptatibus aliquam qui omnis libero? Cum, illo hic? Aspernatur dicta minima minus officiis, sapiente earum, nemo non, alias obcaecati itaque at!

    </p>
  )
}
// throwing alert and functionality for mouse hovering
const Move = () => {
  function moveHandler () {
    alert('Mouse move event fired')
    console.log('Mouse move event fired')
  }
  return (
  <p onMouseMove={moveHandler}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque.
  </p>
  )
}

const App = () => {
  return (
    <section>
      <Button />
      <Copy />
      <Move />
    </section>
  );
};

export default App;