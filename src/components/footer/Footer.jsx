import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='bg-black flex flex-col flex justify-center justify-items-center content-center items-center self-center p-3'>
        
        <div className="icons-footer flex flex-row p-2">
            <a className='icon-footer' href="https://github.com/pelayotrives" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src="./GitHub.png" alt="GitHub Logo" width={23}/></a>
            <a className='icon-footer' href="https://www.linkedin.com/in/pelayo-trives-pozuelo/" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src="./LinkedIn.png" alt="LinkedIn Logo" width={23}/></a>
            <a className='icon-footer icon-footer-up' href="#" rel="noreferrer"><img className='logo-footer mx-7' src="./Up.png" alt="Up Logo" width={23}/></a>
            <a className='icon-footer' href="https://medium.com/@pelayotrives" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src="./Medium.png" alt="Medium Logo" width={23}/></a>
            <a className='icon-footer' href="mailto:pelayotrivespozuelo@gmail.com?Subject=Portfolio%20|%20Quick%20chat%20from%20(insert%20your%20name)" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src="./Email.png" alt="Email Logo" width={23}/></a>
        </div>

        <div className="copyright p-2">
            <p className='text-xs'>All Rights Reserved © 2022 &nbsp; | &nbsp; Original design by Pelayo Trives Pozuelo &nbsp;</p>
            
        </div>
    </div>
  )
}

export default Footer