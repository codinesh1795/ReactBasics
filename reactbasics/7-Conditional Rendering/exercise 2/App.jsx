const Cart = () => {
  const itens = [ "earbuds","bank","ssd","hoddies"]
  return (
    <div>
    <h1>Cart</h1>
    { itens.length > 0 && <h2>I have {itens.length} items in cart</h2>}
    
    <ul>
      <h4>Products</h4>
      {itens.map(item => (
        <li key={Math.random()}>{item}</li>
      ))}
    </ul>
    </div>
  )
}

const App = () => {
  return (
    <section>
      <Cart />
    </section>
  );
};

export default App;