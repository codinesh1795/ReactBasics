import Weather from "./Components/Weather";
import UserStatus from "./Components/UserStatus";
import Greeting from "./Components/Greeting";

const App = () => {
  
  return (
    <div>
      <Weather temperature={35} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <Greeting timeOfDay={'anytime'}/>
    </div>
  );
};

export default App;