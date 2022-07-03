import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import Indicator from '../indicator/Indicator'
import './intro.css'
// import { Cursor } from 'react-simple-typewriter'
// import 'react-simple-typewriter/dist/index'

function Intro() {

    // Usamos el hook de React Simple Typewriter
    const {text} = useTypewriter({
      words: [ 'Full Stack Developer!', 'Multimedia Developer!', 'Designer!', 'Digital Strategy Manager!', 'Lifelong Learner!'], //* Frases que introduciremos.
      loop: 0, //* Infinito.
      typeSpeed: 75, //* Velocidad de typeo.
      deleteSpeed: 50, //* Velocidad de borrado.
      delaySpeed: 1000 //* Tiempo que se mantiene entre palabra y palabra.
    })

  return (
    <div id='intro' className='intro flex flex-row bg-black h-screen'>

        {/* ******** --------------------------- Left Aside (Image)  --------------------------- ******** */}

        <div className='intro-left flex justify-center justify-items-center content-center items-center w-1/2'>
          <div className='intro-left-image'></div>
        </div>
          {/* <img className='intro-left-image rounded-3xl shadow-2xl ' src="../../../profile.jpg" width={650} alt="Me" /> */}
       

        {/* ******** --------------------------- Right Aside  --------------------------- ******** */}

        <div className='intro-right flex-col justify-center justify-items-center content-center items-center self-center w-1/2'>

          <div className='intro-right-wrapper px-10'>
            <h2 className='intro-right-wrapper-introduction text-3xl font-normal'>Welcome! My name is</h2>
            <h1 className='intro-right-wrapper-name text-7xl font-bold mt-3'>Pelayo <span className='text-red-700'>Trives</span> 👨🏻‍💻</h1>
            <p className='text-2xl mt-7'>and I'm a
              <span className='bg-zinc-700 font-semibold ml-2 p-2'>{text}</span>
              {/* <Cursor /> */} {/* Introducimos el componente Cursor. */}
            </p>
          </div>

          {/* ******** Description ******** */}

          <div className='intro-right-wrapper-description px-10'>
            <p className='intro-right-wrapper-description-paragraph text-lg mt-11'>
            My specialty is developing digital products with optimal service. I love <span className='font-bold'>integrating new technologies</span> in my <span className='font-bold text-red-700'>Full Stack</span> products. Do you want to know more about me? <br/> <span className='font-bold underline underline-offset-4'>Keep scrolling!</span>
            </p>
          </div>

          {/* ******** Buttons ******** */}

          <div className='buttons-download flex flex-row justify-center justify-items-center content-center items-center self-center mt-12'>
            <div className='button-cv-download bg-zinc-700 rounded-xl font-normal text-center flex justify-center justify-items-center content-center items-center self-center p-4 w-1/3 mx-5'>
              <a href='/curriculum.pdf' download>Download CV</a>
            </div>

            <div className='button-cv-download bg-zinc-700 rounded-xl font-normal text-center flex justify-center justify-items-center content-center items-center self-center p-4 w-1/3 mx-5'>
              <a href="mailto:pelayotrivespozuelo@gmail.com?Subject=Portfolio%20|%20Quick%20chat%20from%20(insert%20your%20name)" rel='noreferrer' target={"_blank"}>Let's talk!</a>
            </div>
          </div>
          
          {/* ******** Scroll Arrow ******** */}

          <Indicator/>

        </div>
        
    </div>
  )
}

export default Intro