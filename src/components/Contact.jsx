import React from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {GrMail} from 'react-icons/gr'
import {MdContactPhone} from 'react-icons/md'

function Contact() {

  const [sentForm, setSentForm] = useState(false)
  const [nameInput, setNameInput] = useState("")
  const [subjectInput, setSubjectInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [messageInput, setMessageInput] = useState("")

  const formRef = useRef();

  const handleSubmit = (event) => {

    event.preventDefault();

    setNameInput("");
    setSubjectInput("");
    setEmailInput("");
    setMessageInput("");

    emailjs.sendForm('service_r0vujdo', 'template_76a9wwc', formRef.current, 'pYLrar-yeLxs5nqii')
      .then((result) => {
          console.log("Email sent.");
          setSentForm(true);
      }, (error) => {
          console.log("There was an error sending your mail. Try again.");
      });

  }

  return (
    <div id='contact' className='contact flex flex-col justify-center justify-items-center content-center items-center self-center bg-zinc-800'>
      
      <div className="presentation-container-greeting flex flex-col justify-center justify-items-center content-center items-center self-center w-4/6 md:w-3/6">
        <h2 className="text-6xl font-bold my-6">Contact</h2>
      </div>

      <div className="skills-content w-4/6 md:w-3/6">
        <p className="text-justify hidden xmd:block">You can contact me by <span className='font-bold text-red-700'>phone</span> or by <span className='font-bold text-red-700'>email</span>. Click on any of the two icons to open a <span className='font-bold text-red-700'>new window</span> and take the first step of something very important! If you want to know more details about me, fill out the following form.</p>
        <p className="text-justify block xmd:hidden">You can contact me by <span className='font-bold text-red-700'>phone</span> or by <span className='font-bold text-red-700'>email</span>. Click on any of the two icons to open a <span className='font-bold text-red-700'>new window</span> and take the first step of something very important!</p>
      </div>

      <div className='icon-wrapper flex flex-row justify-center justify-items-center content-center items-center self-center w-4/6 md:w-3/6 my-6'>
        <div className='mail flex flex-row justify-center justify-items-center content-center items-center self-center'>
          <a href="mailto:pelayotrivespozuelo@gmail.com" rel="noreferrer" target={'_blank'}><GrMail className="mr-5" size={25}/></a>
        </div>
        <div className='phone flex flex-row justify-center justify-items-center content-center items-center self-center'>
          <a href="https://wa.me/+34686115314?text=Portfolio%20|%20Quick%20Chat" rel="noreferrer" target={'_blank'}><MdContactPhone className="mr-5" size={25}/></a>
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col w-4/6 md:w-3/6'>
        <input className='focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white invalid:border-zinc-500 invalid:text-red-700 focus:invalid:border-red-700 focus:invalid:ring-red-700 bg-transparent text-white p-4 border-x-0 border-t-0' type="text" placeholder='Name' name='user_name' value={nameInput} onChange={event => setNameInput(event.target.value)} required/>
        <input className='focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white invalid:border-red-700 invalid:text-red-700 focus:invalid:border-red-700 focus:invalid:ring-red-700 bg-transparent text-white p-4 border-x-0 border-t-0 mt-6' type="text" placeholder='Subject' name='user_subject' value={subjectInput} onChange={event => setSubjectInput(event.target.value)}/>
        <input className='focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white invalid:border-zinc-500 invalid:text-red-700 focus:invalid:border-red-700 focus:invalid:ring-red-700 bg-transparent text-white p-4 border-x-0 border-t-0 mt-6' type="email" placeholder='Email' name='user_email' value={emailInput} onChange={event => setEmailInput(event.target.value)} required/>
        <textarea className='focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white invalid:border-red-700 invalid:text-red-700 focus:invalid:border-red-700 focus:invalid:ring-red-700 bg-transparent text-white p-4 border-x-0 border-t-0 mt-6' rows="4" name="message" value={messageInput} onChange={event => setMessageInput(event.target.value)} placeholder='What do you want to talk about?'/>
        <div className="button-and-response flex flex-row justify-center justify-items-center content-center items-center self-center">
          <div className='button-more-skills flex justify-center justify-items-center content-center items-center self-center font-normal text-center bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 cursor-pointer rounded-md p-4 w-48 my-6'>
            <button>Submit</button>
          </div>
        {sentForm === true &&
          <>
          <p className='text-thanks flex flex-row justify-center justify-items-center items-center ml-8'>Thanks for your time!</p>
          </>
        }
        </div>
      </form>

    </div>
  )
}

export default Contact