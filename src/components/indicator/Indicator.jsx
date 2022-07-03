import React from 'react'
import './indicator.css'

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