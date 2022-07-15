import React from 'react'
import Indicator from '../indicator/Indicator'
import { Waypoint } from 'react-waypoint';
import { useRef } from 'react';
import './skills.css';

function Skills() {

  const selectorRef1 = useRef();
  const selectorRef2 = useRef();
  const selectorRef3 = useRef();
  const selectorRef4 = useRef();
  const selectorRef5 = useRef();
  const selectorRef6 = useRef();

  const loadElements = () => {
    console.log(selectorRef1.current);
    // Con esto añadimos la clase cuando triggerea el evento con el onenter={} de Waypoints
    selectorRef1.current.className = selectorRef1.current.className + " bar-1-animation"
    selectorRef2.current.className = selectorRef2.current.className + " bar-2-animation"
    selectorRef3.current.className = selectorRef3.current.className + " bar-3-animation"
    selectorRef4.current.className = selectorRef4.current.className + " bar-4-animation"
    selectorRef5.current.className = selectorRef5.current.className + " bar-5-animation"
    selectorRef6.current.className = selectorRef6.current.className + " bar-6-animation"
  }

  return (

    <div id='skills' className='skills bg-zinc-800 h-fit flex flex-col justify-center justify-items-center self-center'>

            <div id='skills-content-title' className="skills-content-title flex flex-col justify-center justify-items-center content-center items-center self-center">
                <h2 className='about-left-title-item text-7xl font-bold mt-32 mb-16'>Skills</h2>
                <div className="skills-content-info text-lg mb-20">
                <p>My skills are very diverse and cover a wide range of sectors: design, UX, UI, web development, application development, digital strategy management, marketing...</p>
                </div>
            </div>

            <Waypoint onEnter={loadElements}>

            <div className="all-chart-wrapper mb-20">

                    <div id='cw-1' className="chart-wrapper">
                        <h5 className='mb-7 font-bold'>HTML, CSS, Tailwind, Bootstrap</h5>
                        <div className="chart">
                            <div ref={selectorRef1} className="bar-1"></div>
                            <span className="value text-white ml-3">90%</span>
                        </div>
                    </div>
                    
                    <div id='cw-2' className="chart-wrapper">
                        <h5 className='mb-7 mt-7 font-bold'>Adobe Suite, Figma</h5>
                        <div className="chart">
                            <div ref={selectorRef2} className="bar-2"></div>
                            <span className="value text-white ml-3">80%</span>
                        </div>    
                    </div>
                    
                    <div id='cw-3' className="chart-wrapper">
                        <h5 className='mb-7 mt-7 font-bold'>JavaScript, MERN Stack</h5>
                        <div className="chart">
                            <div ref={selectorRef3} className="bar-3"></div>
                            <span className="value text-white ml-3">75%</span>
                        </div>  
                    </div>         
                
                    <div id='cw-4' className="chart-wrapper">
                        <h5 className='mb-7 mt-7 font-bold'>Git, GitHub</h5>
                        <div className="chart">
                            <div ref={selectorRef4} className="bar-4"></div>
                            <span className="value text-white ml-3">70%</span>
                        </div> 
                    </div>
                    
                    <div id='cw-5' className="chart-wrapper">
                        <h5 className='mb-7 mt-7 font-bold'>Other frameworks and libraries</h5>
                        <div className="chart">
                            <div ref={selectorRef5} className="bar-5"></div>
                            <span className="value text-white ml-3">65%</span>
                        </div>
                    </div>
                    
                    <div id='cw-6' className="chart-wrapper">
                        <h5 className='mb-7 mt-7 font-bold'>PHP, MySQL, Arduino, Processing</h5>
                        <div className="chart">
                            <div ref={selectorRef6} className="bar-6"></div>
                            <span className="value text-white ml-3">60%</span>
                        </div>
                    </div>

            </div>

            </Waypoint>

            <div className='button bg-zinc-700 rounded-xl font-normal text-center flex justify-center justify-items-center content-center items-center self-center p-4 w-1/4'>
                <button><a href="https://www.linkedin.com/in/pelayo-trives-pozuelo/details/skills/" rel='noreferrer' target={"_blank"}>More skills!</a></button>
            </div>

            <a className='mb-32 mt-5' href="#projects"><Indicator/></a> 

    </div>
  )
}

export default Skills