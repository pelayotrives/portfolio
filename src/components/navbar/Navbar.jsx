import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='bg-zinc-900'>
        <div className="navbar-links">
            <ul className='flex flex-row sm:justify-start justify-center p-5'>
                <li className='mr-20 ml-5'><a href="#intro"><img src='../../home.png' width={25} alt='Home icon'/></a></li>
                <li className='mr-20'><a href="#example">About</a></li>
                <li className='mr-20'><a href="https://www.linkedin.com/in/pelayo-trives-pozuelo/">LinkedIn</a></li>
                <li className='mr-5'><a href="https://github.com/pelayotrives">GitHub</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar