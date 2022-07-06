import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='bg-black flex flex-col flex justify-center justify-items-center content-center items-center self-center p-5'>
        <div className="icons-footer flex flex-row p-3 mb-1 ">
        
            <a className='icon-footer' href="https://github.com/pelayotrives" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src="./GitHub.png" alt="GitHub Logo" width={30}/></a>
            <a className='icon-footer' href="https://www.linkedin.com/in/pelayo-trives-pozuelo/" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src="./LinkedIn.png" alt="LinkedIn Logo" width={30}/></a>
            <a className='icon-footer' href="https://medium.com/@pelayotrives" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src="./Medium.png" alt="Medium Logo" width={30}/></a>
            <a className='icon-footer' href="mailto:pelayotrivespozuelo@gmail.com?Subject=Portfolio%20|%20Quick%20chat%20from%20(insert%20your%20name)" rel="noreferrer" target={"_blank"}><img className='logo-footer mx-7' src="./Email.png" alt="Email Logo" width={30}/></a>
        </div>

        <div className="copyright p-3">
            <p className='text-sm'>© 2022 - Pelayo Trives Pozuelo | <a className='text-sm font-semibold text-red-700' href="#intro">Back to top</a></p>
            
        </div>
    </div>
  )
}

export default Footer