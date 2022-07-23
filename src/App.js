import './App.css'
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Contact from './components/contact/Contact';
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';


function App() {

  //! ****************** Framer Motion ******************

  //* ****************** Inicializamos estado para activar animación de pantalla gris ******************
  const [initial, setInitial] = useState(true);

  //* ****************** Aplicamos la activación con invocación de función principal en useEffect ******************
  useEffect(() => {
    Init();
    //? Con esto, independientemente de donde estemos situados, si se hace reload, se manda al usuario al principio.
    window.scrollTo(0,0);
  }, [])
  
  //* ****************** Constantes de elementos SVG para animación ******************
  const blackBox = {
    initial: {
      height: "100%",
      top: 0,
      opacity: 1,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.25,
        when: "afterChildren",
      },
    },
  };

  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 90,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  //! ****************** Función principal de Framer Motion ******************

  const Init = () => {
    
      return (
          <motion.div
            className="absolute z-50 flex items-center justify-center w-full bg-[#1c1c1c]"
            initial="initial"
            animate="animate"
            variants={blackBox}
            onAnimationStart={() => document.body.classList.add("overflow-hidden")}
                onAnimationComplete={() => {
                    document.body.classList.remove("overflow-hidden");
                }
                }
          >

            <motion.svg variants={textContainer} className="absolute z-50 flex">
                <pattern
                  id="pattern"
                    patternUnits="userSpaceOnUse"
                    width={750}
                    height={800}
                    className="text-white"
                >
                    <rect className="w-full h-full fill-current" />
                    <motion.rect
                      variants={text}
                      className="w-full h-full text-gray-600 fill-current"
                    />
                </pattern>

                <text
                  className="text-6xl font-bold"
                  text-anchor="middle"
                  x="50%"
                  y="50%"
                  style={{ fill: "url(#pattern)" }}
                >Pelayo Trives</text>
            </motion.svg>
          </motion.div>
      );
  };
  

  return (
    <div className="App">
    {/* Si initial es true, invocamos el componente de función de Init */}
    {initial && <Init/>}
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
