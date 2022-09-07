import React from 'react'
import Scroll from '../assets/scroll.png'

// Just to get acces to it in a quick way.

function Indicator() {
  return (
    <div className='indicator-container'>
        <div className='indicator'>
            <img src={Scroll} width={30} alt='Scroll arrow' />
        </div>
    </div>
  )
}

export default Indicator