import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Main() {

      useEffect(() => {
       AOS.init({duration: 2000})
  }, [])


    return (
    
      <div id='main'>
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
            </div>
            
  )
}

export default Main