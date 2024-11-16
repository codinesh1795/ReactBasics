import Card from "./Components/Card";

const App = () => {
  return (
    <div>
      <Card>
        <h1> My Card </h1>
        <p> Assume this is content for card</p>
      </Card>
      <Card>
        <h1> My Card 2</h1>
        <p> Assume this is content for card 2 </p>
      </Card>
      <Card>
        <h1> My Card 3</h1>
        <p> Assume this is content for card 3</p>
      </Card>
    </div>
  );
};

export default App;