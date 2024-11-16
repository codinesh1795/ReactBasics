 
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import WelcomeMessage from "./Components/WelcomeMessage";
// below is how we import a component from the export file
import Greet from "./Components/Greet";
// below is how we use a component in our App
const App = () => {
  return ( <div>
    <Header />
    <MainContent />
    <WelcomeMessage />
    <Footer />
  </div>
  )
}
// now we export overall App component that also contains Greet component
export default App;