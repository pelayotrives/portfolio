import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div id='contact' className='contact bg-zinc-800 h-screen flex flex-row '>

        <div className='left-bar h-full w-10 bg-zinc-500'></div>

        <div className="contact-wrapper flex flex-row">

            <div className="contact-left flex flex-col justify-center justify-items-center content-center items-center self-center p-16 w-1/2">
                <h2 className="title-contact text-7xl font-bold self-start">Let's talk about new <span className='text-red-800'>projects</span>!</h2>
                <div className="icon-wrapper flex flex-col self-start mt-20">
                    <div className="phone mb-12 flex flex-row items-center">
                        <img src="/phone.png" alt="Phone logo" width={40} />
                        <p className='ml-10 text-lg'>+34 686 115 314</p>
                    </div>
                    <div className="mail mb-12 flex flex-row items-center">
                        <img src="/mail.png" alt="Mail logo" width={40} />
                        <p className='ml-10 text-lg'>pelayotrivespozuelo@gmail.com</p>
                    </div>
                    <div className="address flex flex-row items-center">
                        <img src="/address.png" alt="Address logo" width={40} />
                        <address className='not-italic ml-10 text-lg'>Plaza de Manolete, 3, 28020, Madrid, Spain</address>
                    </div>
                </div>
            </div>

            <div className="contact-right flex content-center items-center self-center p-12 w-1/2">
                <div className="contact-form">
                    <p className='contact-form-question'><span className='font-bold text-lg'>You like what you see? Do you have any question?</span> You can contact me directly by filling out this form. I will be happy to answer you as soon as possible.</p>
                    <div className="contact-form-content">
                        <form action="" className='flex flex-col mt-7'>
                            <input className='bg-transparent text-white p-4 mt-7' type="text" placeholder='Name' name='username' required/>
                            <input className='bg-transparent text-white p-4 mt-7' type="text" placeholder='Subject' name='subject' />
                            <input className='bg-transparent text-white p-4 mt-7' type="email" placeholder='Email' name='email' required/>
                            <textarea className='bg-transparent text-white p-4 mt-7' rows="4" name="message" placeholder='What do you want to talk about?'/>
                            <button className='button-form bg-zinc-700 rounded-xl font-normal text-center p-4 mt-10 w-36'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Contact