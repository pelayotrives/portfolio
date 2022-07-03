import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import './App.css'
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />  
      <Skills />    
    </div>
  );
}

export default App;
