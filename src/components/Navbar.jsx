import React from 'react'

function Navbar() {
  return (
    <div className='bg-slate-900'>
        <div className="navbar-links">
            <ul className='flex flex-row sm:justify-end justify-center p-5'>
                <li className='mr-20'><a href="#example">About</a></li>
                <li className='mr-20'><a href="https://www.linkedin.com/in/pelayo-trives-pozuelo/">LinkedIn</a></li>
                <li className='mr-5'><a href="https://github.com/pelayotrives">GitHub</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar