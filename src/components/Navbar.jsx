import React from 'react'

const capitalize = (text) => text.toUpperCase();

function Navbar() {
  return (
    <nav class="bg-zinc-800 py-5 px-4 fixed w-full z-30">
      <div class="container flex flex-row justify-center sm:justify-between items-center mx-auto">
        <a href="#"><span class="text-md hover:underline hover:underline-offset-4 font-semibold whitespace-nowrap tracking-widest hidden sm:block">{capitalize("Pelayo Trives")}</span></a>
        <div class="flex flex-row" id="navbar-default">
          <ul class="flex flex-row bg-transparent space-x-6 xmd:space-x-8 text-sm font-medium">
            <li><a href="#about" class="text-white hover:text-red-700">About</a></li>
            <li><a href="#projects" class="text-white hover:text-red-700">Projects</a></li>
            <li><a href="#skills" class="text-white hover:text-red-700">Skills</a></li>
            <li><a href="#faq" class="text-white hover:text-red-700">FAQ</a></li>
            <li><a href="#contact" class="text-white hover:text-red-700">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar