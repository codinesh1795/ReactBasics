// how to pass data from parent component to child components
const App = () => {
// we use something known as props
// we create a component in the parent like user below
  return (
    <User
    img="someSourceFileURL"
    name="Dinesh"
    age={30}
    hobbies = {["lets work ","lets play ","lets work again"]} 
    />
  );
};
// we pass the informcation create in user component to user function below using props

const User = (props) => {
  //console.log(props)
  // and we access data using props as shown below
  return <section>
    <h1>Name: {props.name}</h1>
    <h1>Age: {props.age}</h1>
    <h1>Hobbies: {props.hobbies}</h1>
  </section>
}
// can also be passed via destructuring
// const User = ({img,name,age,hobbies}) => {
export default App;