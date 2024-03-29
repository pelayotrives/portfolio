import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Indicator from "./Indicator";
import { Cursor } from "react-simple-typewriter";
// import 'react-simple-typewriter/dist/index'
import CV from '../assets/curriculum.pdf'

function Intro() {
  // Usamos el hook de React Simple Typewriter
  const { text } = useTypewriter({
      words: [
        "Full Stack Dev!",
        "Multimedia Dev!",
        "Designer!",
        "Creative!",
        "Lifelong Learner!",
      ], //* Frases que introduciremos.
      loop: 0, //* Infinito.
      typeSpeed: 75, //* Velocidad de typeo.
      deleteSpeed: 50, //* Velocidad de borrado.
      delaySpeed: 1000, //* Tiempo que se mantiene entre palabra y palabra.
  });

  return (
    <div className="intro flex flex-col justify-evenly justify-items-center items-center content-center self-center bg-black">

        <div className="image-container flex justify-center justify-items-center items-center content-center self-center mt-24 mb-6 w-3/6">
          <div className="image bg-profile bg-no-repeat bg-center bg-cover hover:bg-profile2 hover:animate-zoom transition-all rounded-full w-44 h-44 sm:w-60 sm:h-60 4xl:w-72 4xl:h-72"></div>
        </div>

        <div className="presentation-container flex flex-col justify-evenly justify-items-center items-center content-center self-center w-5/6 md:w-4/6 xlg:w-3/6">
          <div className="presentation-container-greeting">
            <h2 className="hidden md:block text-2xl md:text-5xl xl:text-6xl font-semibold font-mono">&#123;Hello, world!&#125;</h2>
            <h2 className="md:hidden text-4xl sm:text-5xl font-semibold font-mono">&#123;"Welcome!"&#125;</h2>
          </div>

          <div className="presentation-container-name my-6">
            <h1 className="hidden md:block md:text-3xl xl:text-4xl animate-appear">My name is{" "}<span className="text-red-700 font-bold">Pelayo Trives</span></h1>
            <h1 className="md:hidden text-2xl sm:text-3xl animate-appear">I'm{" "}<span className="text-red-700 font-bold">Pelayo Trives</span></h1>
          </div>

          <div className="presentation-container-jobs">
            <p className="text-md md:text-lg xl:text-2xl">and I'm a<span className="bg-zinc-700 text-left font-semibold ml-2 py-2 px-3">{text}</span><Cursor /></p>
          </div>
        </div>

      <div className="presentation-description flex flex-col justify-evenly justify-items-center items-center content-center self-center w-4/6 md:w-3/6">
        <hr className="w-2/6 my-6"/>
        <p className="text-justify hidden xmd:block">I am a Spanish developer who loves solving problems, <span className="font-bold text-red-700">programming</span> and overcoming obstacles day by day. My specialty is <span className="font-bold text-red-700">developing digital products</span> with optimal service. I love music, animals and <span className="font-bold text-red-700">software development</span>. I consider myself a responsible committed person. Do you want to know a little more about me?</p>
        <p className="text-justify block xmd:hidden">I am a Spanish developer who loves solving problems, <span className="font-bold text-red-700">programming</span> and overcoming obstacles day by day. My specialty is <span className="font-bold text-red-700">developing digital products</span> with optimal service.</p>
      </div>

      <div className='buttons-info flex flex-col xlg:flex-row justify-evenly justify-items-center content-center items-center self-center w-3/6 my-6'>
        <div className='button-cv flex justify-center justify-items-center content-center items-center self-center font-normal text-center bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 cursor-pointer rounded-md p-4 w-48'>
          <button><a href={CV} download="CV_PelayoTrives.pdf">Download CV</a></button>
        </div>

        <div className='button-email flex justify-center justify-items-center content-center items-center self-center font-normal text-center bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 cursor-pointer rounded-md p-4 w-48 mt-4 xlg:mt-0'>
          <button><a href="mailto:pelayotrivespozuelo@gmail.com?Subject=Portfolio%20|%20Quick%20chat%20from%20(insert%20your%20name)" rel='noreferrer' target={"_blank"}>Let's talk!</a></button>
        </div>
      </div>

      <a className='flex justify-center justify-items-center items-center content-center self-center animate-bounce w-3/6 mb-6' href="#about"><Indicator/></a>

    </div>
  );
}

export default Intro;
