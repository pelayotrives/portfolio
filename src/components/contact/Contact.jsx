import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='projects bg-zinc-700 h-screen flex flex-row'>

        <div className='left-bar h-full w-10 bg-zinc-500'></div>

        <div className="contact-left flex flex-col justify-center justify-items-center content-center items-center self-center w-1/2">
            <h2 className="title-contact text-7xl font-bold self-start">Contact information</h2>
            <div className="icon-wrapper flex flex-col self-start mt-20">
                <div className="phone mb-12 flex flex-row">
                    <img src="/phone.png" alt="Phone logo" width={40} />
                    <p>+34 686 115 314</p>
                </div>
                <div className="mail mb-12 flex flex-row">
                    <img src="/mail.png" alt="Mail logo" width={40} />
                    <p>pelayotrivespozuelo@gmail.com</p>
                </div>
                <div className="address flex flex-row">
                    <img src="/address.png" alt="Address logo" width={40} />
                    <address className='not-italic'>Plaza de Manolete, 3, 28020, Madrid, Spain</address>
                </div>
            </div>
        </div>

        <div className="contact-right w-1/2">
            <p className="contact-form">Contact form</p>
        </div>

    </div>
  )
}

export default Contact