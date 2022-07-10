import React from 'react'
import './projects.css'
import Indicator from '../indicator/Indicator'

function Projects() {
  return (
    <div id='projects' className='projects bg-zinc-900 h-fit flex flex-col justify-center justify-items-center self-center'>

            <div id='projects-content-title' className="skills-content-title flex flex-col justify-center justify-items-center content-center items-center self-center">
                <h2 className='projects-title text-7xl font-bold mt-32 mb-16'>Projects</h2>
                <div className="projects-content-info text-lg mb-20">
                    <p>Check out my last projects! I'm sure you will understand why I love so much everything related to <span className='text-red-700 font-bold'>Full Stack Development! 💻</span></p>
                </div>
            </div>

            <div className="cards flex flex-row justify-center justify-items-center">

                <div className="card rounded-lg shadow-2xl text-center">
                    <div id='card-image-picture-1' className="card-image"></div>
                    <div className="card-content">
                        <h4 className='text-2xl font-bold mb-5'>Save Mankind</h4>
                        <p className='mb-7'>A cool JavaScript game made with canvas. Really easy and fun to play!</p>
                        <div className='button bg-zinc-700 rounded-md font-normal text-center flex justify-center justify-items-center content-center items-center self-center p-3 w-1/2'>
                            <button><a href='https://pelayotrives.github.io/save-mankind/' rel="noreferrer" target={"_blank"}>See project</a></button>
                        </div>
                    </div>
                </div>

                <div className="card rounded-lg shadow-2xl text-center mx-20">
                    <div id='card-image-picture-2' className="card-image"></div>
                    <div className="card-content">
                        <h4 className='text-2xl font-bold mb-5'>C-Wall Tracker</h4>
                        <p className='mb-7'>Check the market easily! Track and manage your favorite cryptos!</p>
                        <div className='button bg-zinc-700 rounded-md font-normal text-center flex justify-center justify-items-center content-center items-center self-center p-3 w-1/2'>
                            <button><a href='https://cwall-tracker.herokuapp.com/' rel="noreferrer" target={"_blank"}>See project</a></button>
                        </div>
                    </div>
                </div>

                <div className="card rounded-lg shadow-2xl text-center">
                    <div id='card-image-picture-3' className="card-image"></div>
                    <div className="card-content">
                        <h4 className='text-2xl font-bold mb-5'>Gamer Orbit</h4>
                        <p className='mb-7'>Keep your collection in order and list your wished and favorite games!</p>
                        <div className='button bg-zinc-700 rounded-md font-normal text-center flex justify-center justify-items-center content-center items-center self-center p-3 w-1/2'>
                            <button><a href='https://gamer-orbit.netlify.app/' rel="noreferrer" target={"_blank"}>See project</a></button>
                        </div>
                    </div>
                </div>

            </div>

            <a className='mb-32 mt-8' href="#contact"><Indicator /></a> 

    </div>
  )
}

export default Projects