
const App = () => {
// method 2
const styles = { color:"white", backgroundColor:"crimson", padding:"2rem"};

  return (
    <section>
      <h1 style={styles}>Inline style</h1>
    </section>
  );
  // method 1
  // <h1 style={{ color:"white", backgroundColor:"crimson", padding:"2rem"}}>Inline style</h1>
};

export default App;