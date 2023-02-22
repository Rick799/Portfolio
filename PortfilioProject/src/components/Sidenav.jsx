import React, { useEffect, useState } from 'react'
import { AiOutlineDatabase, AiOutlineExperiment, AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Sidenav() {
   
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

      useEffect(() => {
       AOS.init({duration: 2000})
  }, [])

  return (
      <div>
          <AiOutlineMenu onClick={handleNav} class='text-slate-200 absolute top-4 right-4 md:hidden z-[99] cursor-pointer' />
          {
              nav ? (
                  <div class='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center'>
                      <a onClick={handleNav}  href="#main" class='w-[75%] m-2 p-4 bg-slate-100 flex justify-center rounded-t-full cursor-pointer shadow-lg shadow-slate-500 hover:scale-110  duration-300'>
                          <AiOutlineHome size={20}/>
                      <span class='pl-4'>Home</span>
                      </a>
                      <a onClick={handleNav} href="#experience" class='w-[75%] m-2 p-4 bg-slate-100 flex justify-center rounded-full cursor-pointer shadow-lg shadow-slate-500 hover:scale-110  duration-300'>
                          <GrProjects size={20}/>
                      <span class='pl-4'>Experience</span>
                      </a>
                      <a onClick={handleNav} href="#projects" class='w-[75%] m-2 p-4 bg-slate-100 flex justify-center rounded-full cursor-pointer shadow-lg shadow-slate-500 hover:scale-110  duration-300'>
                          <AiOutlineProject size={20}/>
                      <span class='pl-4'>Projects</span>
                      </a>
                      <a onClick={handleNav} href="#main" class='w-[75%] m-2 p-4 bg-slate-100 flex justify-center rounded-full cursor-pointer shadow-lg shadow-slate-500 hover:scale-110  duration-300'>
                          <BsPerson size={20}/>
                      <span class='pl-4'>Resume</span>
                      </a>
                      <a onClick={handleNav} href="#contact" class='w-[75%] m-2 p-4 bg-slate-100 flex justify-center rounded-b-full cursor-pointer shadow-lg shadow-slate-500 hover:scale-110  duration-300'>
                          <AiOutlineMail size={20}/>
                      <span class='pl-4'>Contacts</span>
                      </a>
                  </div>
              )
                  : (
                      ''
                  )
          }

          <div data-aos="slide-left" class='hidden md:block fixed top-[30%] '>
              <div class='flex flex-col '>
                  <a href="main" class='bg-slate-100 flex items-center justify-between rounded-r-lg  w-32  ml-[-90px] hover:ml-[5px] my-3 p-3    cursor-pointer shadow-md hover:shadow-slate-500 hover:scale-105 duration-500 border-r-2 border-slate-900'>
                  Home<AiOutlineHome color='' size={20}/>  
                  </a>
                  <a href="#experience" class='bg-slate-100 flex items-center justify-between rounded-r-lg  w-32  ml-[-90px] hover:ml-[5px] my-3 p-3    cursor-pointer shadow-md hover:shadow-slate-500 hover:scale-105 duration-500 border-r-2 border-slate-900'>
                  Experience<AiOutlineDatabase color='' size={20}/> 
                  </a>
                  <a href="#projects" class='bg-slate-100 flex items-center justify-between rounded-r-lg  w-32  ml-[-90px] hover:ml-[5px] my-3 p-3    cursor-pointer shadow-md hover:shadow-slate-500 hover:scale-105 duration-500 border-r-2 border-slate-900'>
                  Projects<AiOutlineProject color='' size={20}/> 
                  </a>
                  <a href="#main" class='bg-slate-100 flex items-center justify-between rounded-r-lg  w-32  ml-[-90px] hover:ml-[5px] my-3 p-3    cursor-pointer shadow-md hover:shadow-slate-500 hover:scale-105 duration-500 border-r-2 border-slate-900'>
                  Resume<BsPerson color='' size={20}/> 
                  </a>
                  <a href="#contact" class='bg-slate-100 flex items-center justify-between rounded-r-lg  w-32  ml-[-90px] hover:ml-[5px] my-3 p-3    cursor-pointer shadow-md hover:shadow-slate-500 hover:scale-105 duration-500 border-r-2 border-slate-900'>
                  Contact<AiOutlineMail color='' size={20}/> 
                  </a>
              </div>
          </div>
      </div>
  )
}

export default Sidenav