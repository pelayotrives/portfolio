import './App.css'
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />  
      <Skills />
      <Projects />
      <Contact />
      <Footer />   
    </div>
  );
}

export default App;
