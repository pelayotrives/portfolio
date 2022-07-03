import React from 'react'
import Indicator from '../indicator/Indicator'
import './skills.css'

function Skills() {
  return (
    <div id='skills' className='skills bg-zinc-800 h-fit flex flex-col justify-center justify-items-center self-center'>

            <br /><br />
            <div id='skills-content-title' className="skills-content-title flex flex-col justify-center justify-items-center content-center items-center self-center">
                <h2 className='about-left-title-item text-7xl font-bold py-10'>Skills</h2>
                <div className="skills-content-info text-lg py-10">
                <p>My skills are very diverse and cover a wide range of sectors: design, UX, UI, web development, application development, digital strategy management, marketing...</p>
                </div>
            </div>

            <div className="all-chart-wrapper">

                    <div id='cw-1' className="chart-wrapper">
                        <h5 className='mb-7 mt-7 font-bold'>HTML, CSS, Tailwind, Bootstrap</h5>
                        <div className="chart">
                            <div className="bar-1"></div>
                            <span className="value text-white ml-3">90%</span>
                        </div>
                    </div>
                    
                    <div id='cw-2' className="chart-wrapper">
                        <h5 className='mb-7 mt-7 font-bold'>Adobe Suite, Figma</h5>
                        <div className="chart">
                            <div className="bar-2"></div>
                            <span className="value text-white ml-3">80%</span>
                        </div>    
                    </div>
                    
                    <div id='cw-3' className="chart-wrapper">
                        <h5 className='mb-7 mt-7 font-bold'>JavaScript, MERN Stack</h5>
                        <div className="chart">
                            <div className="bar-3"></div>
                            <span className="value text-white ml-3">75%</span>
                        </div>  
                    </div>         
                
                    <div id='cw-4' className="chart-wrapper">
                        <h5 className='mb-7 mt-7 font-bold'>Git, GitHub</h5>
                        <div className="chart">
                            <div className="bar-4"></div>
                            <span className="value text-white ml-3">70%</span>
                        </div> 
                    </div>
                    
                    <div id='cw-5' className="chart-wrapper">
                        <h5 className='mb-7 mt-7 font-bold'>Other frameworks and libraries</h5>
                        <div className="chart">
                            <div className="bar-5"></div>
                            <span className="value text-white ml-3">65%</span>
                        </div>
                    </div>
                    
                    <div id='cw-6' className="chart-wrapper">
                        <h5 className='mb-7 mt-7 font-bold'>PHP, MySQL Arduino, Processing</h5>
                        <div className="chart">
                            <div className="bar-6"></div>
                            <span className="value text-white ml-3">60%</span>
                        </div>
                    </div>

            </div>

            <div className='button bg-zinc-700 mt-20 rounded-xl font-normal text-center flex justify-center justify-items-center content-center items-center self-center p-4 w-1/4'>
                <a href="https://www.linkedin.com/in/pelayo-trives-pozuelo/details/skills/" rel='noreferrer' target={"_blank"}>More skills!</a>
            </div>

            <div className='mb-14'>
                <Indicator />
            </div>

    </div>
  )
}

export default Skills