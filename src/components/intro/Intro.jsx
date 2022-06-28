import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import 'react-simple-typewriter/dist/index'

function Intro() {

    // Usamos el hook de React Simple Typewriter
    const {text} = useTypewriter({
      words: [ "Full Stack Developer.", "Multimedia Developer.", "Digital Strategy Manager.", "Lifelong Learner."], //* Frases que introduciremos.
      loop: 0, //* Infinito.
      typeSpeed: 75, //* Velocidad de typeo.
      deleteSpeed: 50, //* Velocidad de borrado.
      delaySpeed: 1000 //* Tiempo que se mantiene entre palabra y palabra.
    })

  return (
    <div className='intro flex bg-slate-700 h-screen'>

        <div className='intro-left flex-1'>
          <div className='intro-left-wrapper'>
            <h2 className='intro-left-wrapper-introduction text-3xl font-normal'>Welcome! My name is</h2>
            <h1 className='intro-left-wrapper-name text-7xl font-bold'>Pelayo Trives</h1>
            <p className='text-2xl'>I'm a
              <span className='bg-slate-900 font-semibold p-50'>{text}</span>
              <Cursor /> {/* Introducimos el compon. */}
            </p>
          </div>
        </div>

        <div className='intro-right flex-1'>Right aside</div>
        
    </div>
  )
}

export default Intro