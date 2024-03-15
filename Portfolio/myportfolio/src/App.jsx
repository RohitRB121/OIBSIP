import './App.css'
import About from './Components/About';
import ContactMe from './Components/ContactMe';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <ContactMe/>
    </>
  );
}

export default App;
