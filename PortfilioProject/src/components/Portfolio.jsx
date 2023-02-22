import React, { useEffect, useState } from 'react'
import { AiOutlineDatabase, AiOutlineExperiment, AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/MongoDB-Emblem.jpg"
import accordion from "../assets/Accordion.png"
import birthday from "../assets/Birthday.png"
import lorem from "../assets/Lorem.png"
import restaurant from "../assets/Restaurant.png"
import tour from "../assets/Tours.png"
import review from "../assets/Review.png"

function Portfolio() {
   
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
  }
  
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
     {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
   
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
   },
     {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400 ",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
   },
   
  ];

   const portfolios = [
    {
      id: 1,
      src: birthday,
      text: "Birthday Reminder",
        },
         {
      id: 2,
      src: accordion,
      text: "Accordion Project",
        },
          {
      id: 3,
      src: lorem,
      text: "Paragraph Generator",
        },
           {
      id: 4,
      src: restaurant,
      text: "Restaurant Menu",
        },
            {
      id: 5,
      src: tour,
      text: "Tours Project",
        },
             {
      id: 6,
      src: review,
      text: "Review Project",
    },
  ]

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

       <img class='w-full h-screen object-cover scale-x-[-1]' src="https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/277522391_5050178968429137_2590181970653955537_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_ohc=_QVAyTFMmfQAX8qmQUs&_nc_ht=scontent.fccu31-1.fna&oh=00_AfDSwPNZsaInrOiT1LJw22JOSkMP6zqgJiHhzFRpM9W8Kg&oe=63F8F35F" alt="" />
          <div class='w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-slate-800 to-slate-900/50'>
              <div class='max-w-3xl m-auto w-full h-full flex flex-col justify-center items-center lg:items-start'>
                  <h1 data-aos="zoom-in-down" class='text-4xl sm:text-5xl font-bold text-slate-200'>Rajarshi Sarkar</h1>
                  <h2 data-aos="zoom-out-up" class='flex lg:ml-12 pt-4 text-2xl sm:text-3xl font-semibold text-slate-200'>
                      I'm a
                  <TypeAnimation
      sequence={[
        'Developer', // Types 'One'
        2000, // Waits 1s
        'Coder', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Technophile', // Types 'Three' without deleting 'Two'
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
                  </h2>
                  <div class='flex justify-between  pt-7 w-full max-w-[250px]  lg:ml-8 text-slate-200'>
                      <a data-aos="slide-right" href="https://www.facebook.com/raj.r.sarkar/">
                          <FaFacebook className='cursor-pointer hover:scale-150 duration-500' size={20}/>
                      </a>
                      <a data-aos="slide-right" href="https://twitter.com/rajsarkar799">
                          <FaTwitter className='cursor-pointer hover:scale-150 duration-500' size={20}/>
                      </a>
                      <a data-aos="slide-left" href="https://www.instagram.com/raj___sarkar/">
                          <FaInstagram className='cursor-pointer hover:scale-150 duration-500' size={20}/>
                      </a>
                      <a data-aos="slide-left" href="https://github.com/Rick799">
                          <FaGithub className='cursor-pointer hover:scale-150 duration-500' size={20}/>
                      </a>
                  </div>
              </div>
      </div>
      
      <div  class='py-10 md:pl-10 text-center bg-gradient-to-b from-slate-900 to-black '>
                <div class=' text-white w-full h-full max-w-screen-lg mx-auto p-4 flex flex-col justify-center'>
                    <div>
                        <p class=' text-4xl p-2  font-bold border-b-4 border-gray-500 inline'>
                            Experience
                        </p>
                        <p class='py-6'>
                        Technologies I've worked with
                        </p>
                    </div>
                    <div  class='text-center py-8 px-10 sm:px-1 w-full grid grid-cols-2  gap-9 sm:grid-cols-3 cursor-pointer'>
                        { techs.map(({ id, src, title, style }) => (
                                <div data-aos="flip-down">
                                  <div  key={id} class={`py-3 h-36 shadow-md hover:scale-110 duration-500 rounded-lg ${style}`}>
                                                              <img class='w-20 mx-auto' src={src} alt="" />
                                                              <p class='mt-4'>
                                  {title}
                                                              </p>
                                                          </div>
                                </div>
                            ))
                        }
      
                    </div>
                </div>
            </div>

      
      <div id='projects' class='md:pl-10 text-center bg-gradient-to-b from-black to-slate-800 w-full text-white md:h-screen'>
          <div class=' p-4 mx-auto w-full h-full max-w-5xl flex flex-col justify-center '>
              <div class='py-10'>
                  <p class='text-4xl p-2 font-bold border-b-4 border-gray-500 inline'>Projects</p>
                  <p data-aos="flip-down" class='py-6'>Projects I have worked on</p>
              </div>
                  
              <div class='px-12 sm:px-0 grid sm:grid-cols-2 md:grid-cols-3 gap-9'>
               {portfolios.map(({ id, src, text }) => (
                       <div data-aos="zoom-out-down"  key={id}  class=' rounded-lg shadow-md shadow-gray-600 cursor-pointer'>
                   <div class='hover:scale-110 duration-300'>
                     <img class='h-40 rounded-md  ' src={src} alt="" />
                     <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity flex justify-center items-center hover:opacity-100 ">
                       <h2 class="text-white text-lg tracking-widest ">{text}</h2>
                     </div>
                   </div>
                       <div class='flex justify-center items-center'>
                               <div data-aos="slide-right">
                                 <button class='w-1/2 px-6 py-1 m-3 hover:scale-110 duration-300 '>
                                     Demo
                                 </button>
                               </div>
                               <div data-aos="slide-left">
                                 <button class='w-1/2 px-6 py-1 m-3 hover:scale-110 duration-300 '>
                                     Code
                                 </button>
                               </div>
                      </div>
                  </div>
  )) }
                 
              </div>
          </div>
      
      </div>
      </div>
  )
}

export default Portfolio