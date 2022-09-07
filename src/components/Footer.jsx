import React from 'react'
import GitHub from "../assets/GitHub.png"
import Email from "../assets/Email.png"
import LinkedIn from "../assets/LinkedIn.png"
import Up from "../assets/Up.png"
import Medium from "../assets/Medium.png"

function Footer() {
  return (
    <div className='bg-black flex flex-col justify-center justify-items-center content-center items-center self-center p-3'>
        
        <div className="icons-footer flex flex-row p-2">
            <a className='icon-footer hover:animate-zoom transition-all' href="https://github.com/pelayotrives" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src={GitHub} alt="GitHub Logo" width={23}/></a>
            <a className='icon-footer hover:animate-zoom transition-all' href="https://www.linkedin.com/in/pelayo-trives-pozuelo/" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src={LinkedIn} alt="LinkedIn Logo" width={23}/></a>
            <a className='icon-footer hover:rotate-360 transition-all transform-gpu' href="#" rel="noreferrer"><img className='logo-footer mx-7' src={Up} alt="Up Logo" width={23}/></a>
            <a className='icon-footer hover:animate-zoom transition-all' href="https://medium.com/@pelayotrives" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src={Medium} alt="Medium Logo" width={23}/></a>
            <a className='icon-footer hover:animate-zoom transition-all' href="mailto:pelayotrivespozuelo@gmail.com?Subject=Portfolio%20|%20Quick%20chat%20from%20(insert%20your%20name)" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src={Email} alt="Email Logo" width={23}/></a>
        </div>

        <div className="copyright text-center p-2">
            <p className='text-xs'>All Rights Reserved © 2022 &nbsp; | &nbsp; Original design by Pelayo Trives Pozuelo &nbsp;</p>
            
        </div>
    </div>
  )
}

export default Footer