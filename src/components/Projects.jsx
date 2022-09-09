import React from 'react'
import Indicator from './Indicator'
//! Images and logos
import app1 from '../assets/app1.png'
import app2 from '../assets/app2.png'
import app3 from '../assets/app3.png'
import {SiJavascript} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiHandlebarsdotjs} from 'react-icons/si' 
import {SiReact} from 'react-icons/si' 
import {SiExpress} from 'react-icons/si' 
import {SiNodedotjs} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si' 

function Projects() {
  return (
    <div id='projects' className='projects flex flex-col justify-center justify-items-center self-center bg-zinc-800'>

        <div className="projects-container flex flex-col justify-center justify-items-center items-center content-center self-center">
            <div id='projects-content-title' className="projects-content-title flex flex-col justify-center justify-items-center content-center items-center self-center w-3/6">
                <h2 className='projects-title text-4xl sm:text-5xl xmd:text-6xl font-bold my-6'>Projects</h2>
            </div>

            <div className="about-content mb-6 w-4/6 md:w-3/6">
                <p className="text-justify hidden xmd:block">Most of my projects are made using <span className="font-bold text-red-700">MERN (MongoDB - ExpressJS - React - NodeJS)</span>, <span className="font-bold text-red-700">JavaScript (ES6)</span>, <span className="font-bold text-red-700">HTML5</span> and <span className="font-bold text-red-700">CSS3 (TailwindCSS)</span>. However, in my personal GitHub account you will find some projects done in <span className="font-bold text-red-700">C++</span>, <span className="font-bold text-red-700">Swift</span> and other programming languages. If you want to see a more extensive list of my current projects, click on the button below! Every day I learn new programming languages and frameworks to keep up to date!</p>
                <p className="text-justify block xmd:hidden">Most of my projects are made using <span className="font-bold text-red-700">MERN</span><span className='font-bold'> (MongoDB - ExpressJS - React - NodeJS)</span>, <span className="font-bold text-red-700">JavaScript (ES6)</span>, <span className="font-bold text-red-700">HTML5</span> and <span className="font-bold text-red-700">CSS3 (TailwindCSS)</span>.</p>
            </div>

            <div className="projects-cards flex flex-col 3xl:flex-row w-4/6">
                <div className="flex flex-col justify-evenly justify-items-center items-center content-center self-center max-w-md lg:hover:animate-microzoom transition-all bg-black hover:bg-zinc-900 hover:shadow-md rounded-lg">
                    <a href="https://github.com/pelayotrives/save-mankind"><img className="rounded-t-lg" src={app1} alt="AppOnePicture" /></a>
                    <div className="flex flex-col justify-evenly justify-items-center items-center content-center self-center w-10/12 h-72">
                        <a href="https://github.com/pelayotrives/save-mankind"><h5 className="text-2xl text-white text-center font-bold tracking-tight">Save Mankind</h5></a>
                        <div className="programming-icons flex flex-row justify-evenly justify-items-center items-center content-center self-center">
                            <SiJavascript size={20} className="ml-20 sm:ml-0"/>
                            <SiHtml5 size={20} className="mx-6"/>
                            <SiCss3 size={20} className="mr-20 sm:mr-0"/>
                        </div>
                        <p className="font-normal text-gray-400 text-justify text-sm">A really cool JavaScript game made with canvas. So easy to play! Made with HTML5, CSS3 and Vanilla JavaScript.</p>
                        <a href="https://github.com/pelayotrives/save-mankind" className="flex justify-center justify-items-center items-center content-center self-center text-md font-medium text-center text-white bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 cursor-pointer rounded-md p-4 mb-4 w-48">See project<svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                    </div>
                </div>

                <div className="flex flex-col justify-evenly justify-items-center items-center content-center self-center max-w-md lg:hover:animate-microzoom transition-all bg-black hover:bg-zinc-900 hover:shadow-md rounded-lg my-6 3xl:my-0 3xl:mx-14">
                    <a href="https://cwall-tracker.herokuapp.com/"><img className="rounded-t-lg" src={app2} alt="AppTwoPicture" /></a>
                    <div className="flex flex-col justify-evenly justify-items-center items-center content-center self-center w-10/12 h-72">
                        <a href="https://cwall-tracker.herokuapp.com/"><h5 className="text-2xl text-white text-center font-bold tracking-tight">C-Wall Tracker</h5></a>
                        <div className="programming-icons flex flex-row justify-evenly justify-items-center items-center content-center self-center">
                            <SiJavascript size={20} className="ml-9 mr-4 sm:ml-0"/>
                            <SiHandlebarsdotjs size={20} className="mr-4"/>
                            <SiExpress size={20} className="mr-4"/>
                            <SiNodedotjs size={20} className="mr-4"/>
                            <SiHtml5 size={20} className="mr-4"/>
                            <SiCss3 size={20} className="mr-9 sm:mr-0"/>
                        </div>
                        <p className="font-normal text-gray-400 text-justify text-sm">Are you worried about cryptos and their value in the market? Find your currencies and discover C-Wall Tracker!</p>
                        <a href="https://cwall-tracker.herokuapp.com/" className="flex justify-center justify-items-center items-center content-center self-center text-md font-medium text-center text-white bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 cursor-pointer rounded-md p-4 mb-4 w-48">See project<svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                    </div>
                </div>

                <div className="flex flex-col justify-evenly justify-items-center items-center content-center self-center max-w-md lg:hover:animate-microzoom transition-all bg-black hover:bg-zinc-900 hover:shadow-md rounded-lg">
                    <a href="https://gamer-orbit.netlify.app/"><img className="rounded-t-lg filter invert" src={app3} alt="AppThreePicture" /></a>
                    <div className="flex flex-col justify-evenly justify-items-center items-center content-center self-center w-10/12 h-72">
                        <a href="https://gamer-orbit.netlify.app/"><h5 className="text-2xl text-white text-center font-bold tracking-tight">Gamer Orbit</h5></a>
                        <div className="programming-icons flex flex-row justify-evenly justify-items-center items-center content-center self-center">
                            <SiJavascript size={20} className="mx-4"/>
                            <SiReact size={20} className="mr-4"/>
                            <SiExpress size={20} className="mr-4"/>
                            <SiNodedotjs size={20} className="mr-4"/>
                            <SiHtml5 size={20} className="mr-4"/>
                            <SiCss3 size={20} className="mr-4"/>
                            <SiBootstrap size={20} className="mr-4"/>
                        </div>
                        <p className="font-normal text-gray-400 text-justify text-sm">Do you enjoy video games? Do you want to keep track of them and manage your collections? Try this web app now!</p>
                        <a href="https://gamer-orbit.netlify.app/" className="flex justify-center justify-items-center items-center content-center self-center text-md font-medium text-center text-white bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 cursor-pointer rounded-md p-4 mb-4 w-48">See project<svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                    </div>
                </div>
            </div>

            <div className='button-more flex flex-row justify-evenly justify-items-center content-center items-center self-center w-3/6 my-6'>
                <div className='button-more-experience flex justify-center justify-items-center content-center items-center self-center font-normal text-center bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 cursor-pointer rounded-md p-4 w-48'>
                    <button><a href='https://github.com/pelayotrives?tab=repositories'>More projects</a></button>
                </div>
            </div>

        </div>
        <a className='flex justify-center justify-items-center items-center content-center self-center animate-bounce w-3/6 mb-6' href="#skills"><Indicator/></a>
    </div>
  )
}

export default Projects