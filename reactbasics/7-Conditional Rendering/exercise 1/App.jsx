// conditional rendering allows us to dynamically display different UI
// components or content based on specific conditions. This enables us to create
// more interactive and responsive user experience

const ValidPassword = () => <h1>Vaild Pasword</h1>;
const InvalidPassword = () => <h1>Invaild Pasword</h1>;

const Password = ({ isValid }) => {
  // using if else block
  /*
  if (isValid){
    return <ValidPassword />;
  }
  return <InvalidPassword />;
  */
 // using ternary operator
 return isValid ? <ValidPassword /> : <InvalidPassword />;
}

const App = () => {
  return (
    <section>
      <Password isValid={true} />
    </section>
  );
};

export default App;