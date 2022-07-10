import React from 'react'
import './navbar.css'

const capitalize = (text) => text.toUpperCase();

function Navbar() {
  return (
    <div className='whole-bar bg-zinc-800'>
        <div className='navbar-links flex flex-row justify-between content-between'>

            <div className='navbar-links-container-left flex flex-row sm:justify-start justify-center justify-items-center content-center items-center self-center p-5'>
                <li className='mr-20 ml-5 page-title'><a className='name-icon font-semibold tracking-widest' href='#intro'>{capitalize("Pelayo Trives")}</a></li>
            </div>

            <div className='navbar-links-container-right flex flex-row justify-center justify-items-center content-center items-center self-center'>
                <li className='link mr-20'><a href='#about'>About</a></li>
                <li className='link mr-20'><a href='#skills'>Skills</a></li>
                <li className='link mr-20'><a href='#projects'>Projects</a></li>
                <li className='link mr-10'><a href='#contact'>Contact</a></li>
            </div>

        </div>
    </div>
  )
}

export default Navbar