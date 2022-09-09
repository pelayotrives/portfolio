import React from 'react'
import Indicator from './Indicator'
import { Waypoint } from 'react-waypoint';
import { useRef } from 'react';
import {SiJavascript} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiReact} from 'react-icons/si' 
import {SiExpress} from 'react-icons/si' 
import {SiNodedotjs} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si' 
import {SiMongodb} from 'react-icons/si' 
import {SiPhp} from 'react-icons/si' 
import {SiMysql} from 'react-icons/si' 
import {SiTailwindcss} from 'react-icons/si' 
import {SiGit} from 'react-icons/si' 

function Skills() {

  const selectorRef1 = useRef();
  const selectorRef2 = useRef();
  const selectorRef3 = useRef();
  const selectorRef4 = useRef();
  const selectorRef5 = useRef();
  const selectorRef6 = useRef();
  const selectorRef7 = useRef();

  const loadElements = () => {
    // console.log(selectorRef1.current);
    // Con esto añadimos la clase cuando triggerea el evento con el onenter={} de Waypoints
    selectorRef1.current.className = selectorRef1.current.className + " animate-barOneAnimation"
    selectorRef2.current.className = selectorRef2.current.className + " animate-barTwoAnimation"
    selectorRef3.current.className = selectorRef3.current.className + " animate-barThreeAnimation"
    selectorRef4.current.className = selectorRef4.current.className + " animate-barFourAnimation"
    selectorRef5.current.className = selectorRef5.current.className + " animate-barFiveAnimation"
    selectorRef6.current.className = selectorRef6.current.className + " animate-barSixAnimation"
    selectorRef7.current.className = selectorRef7.current.className + " animate-barSevenAnimation"
  }

  return (

    <div id='skills' className='skills flex flex-col justify-center justify-items-center self-center bg-zinc-900'>
        
        <div className="skills-container flex flex-col justify-center justify-items-center content-center items-center self-center w-4/6 md:w-3/6">

            <div id='skills-content-title' className="skills-content-title flex flex-col justify-center justify-items-center content-center items-center self-center">
                <h2 className='projects-title text-4xl sm:text-5xl xmd:text-6xl font-bold my-6'>Skills</h2>
            </div>

            <div className="skills-content">
                <p className="text-justify hidden xmd:block">My skills cover a wide range of possibilities and I am proficient in several tools. The sectors that I highlight the most are <span className='font-bold text-red-700'>Programming</span> (Full Stack Development) and <span className='font-bold text-red-700'>Digital Development</span> (UX/UI, Multimedia Development and Graphic Design). However, my training also extends to branches such as <span className='font-bold text-red-700'>Digital Strategy</span> and <span className='font-bold text-red-700'>Digital Marketing</span>. Do you want to know a little more about my skills? So, keep scrolling to see them graphically!</p>
                <p className="text-justify block xmd:hidden">My skills cover a wide range of possibilities and I am proficient in several tools. The sectors that I highlight the most are <span className='font-bold text-red-700'>Programming</span> (Full Stack Development) and <span className='font-bold text-red-700'>Digital Development</span> (UX/UI, Multimedia Development and Graphic Design).</p>
            </div>

            <div className="programming-icons hidden xmd:flex flex-row justify-between justify-items-center items-center content-center self-center my-6 w-full">
                <SiJavascript size={25}/>
                <SiReact size={25}/>
                <SiExpress size={25}/>
                <SiNodedotjs size={25}/>
                <SiHtml5 size={25}/>
                <SiCss3 size={25}/>
                <SiBootstrap size={25}/>
                <SiMongodb size={25}/>
                <SiPhp size={25}/>
                <SiMysql size={25}/>
                <SiGit size={25}/>
                <SiTailwindcss size={25}/>
            </div>

            <div className="programming-icons-responsive xmd:hidden flex flex-col justify-between justify-items-center items-center content-center self-center my-6 w-full">
                <div className="row-1 flex flex-row justify-between justify-items-center items-center content-center self-center w-full mb-4">
                    <SiJavascript size={25}/>
                    <SiReact size={25}/>
                    <SiExpress size={25}/>
                    <SiNodedotjs size={25}/>
                    <SiHtml5 size={25}/>
                    <SiCss3 size={25}/>
                </div>
                <div className="row-2 flex flex-row justify-between justify-items-center items-center content-center self-center w-full">
                    <SiBootstrap size={25}/>
                    <SiMongodb size={25}/>
                    <SiPhp size={25}/>
                    <SiMysql size={25}/>
                    <SiGit size={25}/>
                    <SiTailwindcss size={25}/>
                </div>
            </div>

            <Waypoint onEnter={loadElements}>

            <div className="all-lines w-full">

                <div className="line mb-6">
                    <div className="line-text flex flex-row justify-between">
                        <span className="text-medium font-medium text-white">HTML5, CSS3, JavaScript (ES6)</span>
                        <span className="text-medium font-medium text-white">95%</span>
                    </div>
                    <div className="rounded-full bg-gray-200">
                        <div ref={selectorRef1} className="text-xs font-medium text-center bg-red-700 leading-none rounded-full p-1.5" style={{'width': '95%'}}></div>
                    </div>
                </div>

                <div className="line mb-6">
                    <div className="line-text flex flex-row justify-between">
                        <span className="text-medium font-medium text-white">React JS, Framer Motion</span>
                        <span className="text-medium font-medium text-white">90%</span>
                    </div>
                    <div className="rounded-full bg-gray-200">
                        <div ref={selectorRef2} className="text-xs font-medium text-center bg-red-700 leading-none rounded-full p-1.5" style={{'width': '90%'}}></div>
                    </div>
                </div>

                <div className="line mb-6">
                    <div className="line-text flex flex-row justify-between">
                        <span className="text-medium font-medium text-white">Tailwind, Bootstrap, HandleBars, ExpressJS</span>
                        <span className="text-medium font-medium text-white">85%</span>
                    </div>
                    <div className="rounded-full bg-gray-200">
                        <div ref={selectorRef3} className="text-xs font-medium text-center bg-red-700 leading-none rounded-full p-1.5" style={{'width': '85%'}}></div>
                    </div>
                </div>

                <div className="line mb-6">
                    <div className="line-text flex flex-row justify-between">
                        <span className="text-medium font-medium text-white">Git, GitHub, Heroku, Netlify</span>
                        <span className="text-medium font-medium text-white">80%</span>
                    </div>
                    <div className="rounded-full bg-gray-200">
                        <div ref={selectorRef4} className="text-xs font-medium text-center bg-red-700 leading-none rounded-full p-1.5" style={{'width': '80%'}}></div>
                    </div>
                </div>

                <div className="line mb-6">
                    <div className="line-text flex flex-row justify-between">
                        <span className="text-medium font-medium text-white">MongoDB, Mongoose, SQL</span>
                        <span className="text-medium font-medium text-white">75%</span>
                    </div>
                    <div className="rounded-full bg-gray-200">
                        <div ref={selectorRef5} className="text-xs font-medium text-center bg-red-700 leading-none rounded-full p-1.5" style={{'width': '75%'}}></div>
                    </div>
                </div>

                <div className="line mb-6">
                    <div className="line-text flex flex-row justify-between">
                        <span className="text-medium font-medium text-white">NodeJS, Postman, API Rest, Axios</span>
                        <span className="text-medium font-medium text-white">70%</span>
                    </div>
                    <div className="rounded-full bg-gray-200">
                        <div ref={selectorRef6} className="text-xs font-medium text-center bg-red-700 leading-none rounded-full p-1.5" style={{'width': '70%'}}></div>
                    </div>
                </div>

                <div className="line">
                    <div className="line-text flex flex-row justify-between">
                        <span className="text-medium font-medium text-white">Adobe Suite, Figma, Sketch, Craft</span>
                        <span className="text-medium font-medium text-white">70%</span>
                    </div>
                    <div className="rounded-full bg-gray-200">
                        <div ref={selectorRef7} className="text-xs font-medium text-center bg-red-700 leading-none rounded-full p-1.5" style={{'width': '70%'}}></div>
                    </div>
                </div>

            </div>

            </Waypoint>

            <div className='button-more flex flex-row justify-evenly justify-items-center content-center items-center self-center my-6'>
                <div className='button-more-skills flex justify-center justify-items-center content-center items-center self-center font-normal text-center bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 cursor-pointer rounded-md p-4 w-48'>
                    <button><a href='https://www.linkedin.com/in/pelayo-trives-pozuelo/details/skills/'>More skills</a></button>
                </div>
            </div>

        </div>

        <a className='flex justify-center justify-items-center items-center content-center self-center animate-bounce w-3/6 mb-6' href="#faq"><Indicator/></a>

    </div>
  )
}

export default Skills