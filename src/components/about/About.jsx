import React from 'react'
import Indicator from '../indicator/Indicator'
import './about.css'

function About() {
  return (

    <div id='about' className='about bg-zinc-900 flex flex-row h-screen'>
        
        <div className='about-left flex flex-col justify-center justify-items-center content-center items-center self-center w-1/2'>

                <div className="about-left-text flex flex-col justify-center justify-items-center content-center items-center self-center">

                    <div className="about-left-title self-start">
                        <div className="about-left-title-wrapper">
                            <h2 className='about-left-title-item text-7xl font-bold'>About me...</h2>
                            <br />
                            <h2 className='about-left-title-item text-7xl font-bold'>...and more stuff.</h2>
                            <br />
                        </div>
                    </div>

                    <div className="about-left-content">
                        <p className='text-lg mt-14'>Programming has always been my passion. I started with <span className='font-bold'>PHP</span> during my university studies while improving my <span className='font-bold text-red-700'>digital marketing</span>, <span className='font-bold text-red-700'>design</span> and <span className='font-bold text-red-700'>UX/UI design</span> skills. Little by little, I gained confidence and attended Ironhack's web development bootcamp, where my vision of programming changed and my skills improved a lot.</p>
                        <p className='text-lg mt-7'>I became fluent in <span className='font-bold text-red-700'>MERN Stack</span> as well as <span className='font-bold text-red-700'>semantic HTML, CSS</span> and other tools like <span className='font-bold text-red-700'>WordPress</span>. I have found in <span className='font-bold text-red-700'>JavaScript</span> my ideal partner, and every day I try to improve little by little.</p>
                        <p className='text-lg mt-7'>Do you want to see how?</p>
                    </div>

                </div>

                <a href="#skills"><Indicator/></a> 

        </div>

        <div className='about-right justify-center justify-items-center content-center items-center self-center w-1/2'>
            <video width="85%" preload controls>
                <source src="/videos/pitch.mp4" />
            </video>
        </div>
        
    </div>

  )
}

export default About