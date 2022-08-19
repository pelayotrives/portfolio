import React from 'react'
import './indicator.css'

// Just to get acces to it in a quick way.

function Indicator() {
  return (
    <div>
        <div className='indicator flex justify-center m-8'>
            <img src='/scroll.png' width={30} alt='Scroll arrow' />
        </div>
    </div>
  )
}

export default Indicator