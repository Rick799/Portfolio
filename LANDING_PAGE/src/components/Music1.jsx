import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaStar } from 'react-icons/fa';
import { links, logins } from '../components/data';

function Music1() {

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
    
    return (
        
      <div class=''>
            <main class='max-h-screen flex flex-col justify-between'>
                
                {/* NAVBAR */}
          
              <div class='border-b'>
          
              <nav class='shadow-sm shadow-slate-900 text-white bg-gradient-to-r via-black from-black to-purple-900'>
      <div class='p-4 sm:flex sm:items-center sm:justify-between sm:p-4'>
              <div class='flex justify-between items-center p-2 '>
                  <h1 class=' w-28 mx-5 sm:text-lg md:text-xl lg:text-2xl font-bold font-mono italic'>Planet M</h1>
          <button class='sm:hidden text-2xl text-white bg-transparent border-transparent cursor-pointer transition-all duration-300 ease-linear hover:rotate-90 ' onClick={toggleLinks}>
             <FaBars /> 
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul class=' sm:flex font-light' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a class='tracking-widest block py-2 px-4 sm:mx-9 text-white sm:p-0 sm:mx-2 sm:hover:p-0 sm:hover:bg-transparent' href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul class='hidden sm:flex sm:mx-5'>
          {logins.map((login) => {
            const { id, url, text } = login;
            return (
              <li key={id}>
                <a class='sm:mx-5 ' href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
              </div>


            {/* MAIN */}


             <div class='bg-gradient-to-r from-black via-black to-purple-900 flex items-center justify-around justify-center p-12 h-screen'>
      
          <div class='text-white'>
              <div class='mb-5'>
                  <h1 class=' md:text-xl lg:text-3xl lg:font-extrabold mb-3'>Play millions of songs and podcasts, <br/> for free.</h1>
                  <h3 class='text-xs lg:text-base'>Ready? Let’s play. </h3>
              </div>
              
              <div class='mb-5'>
              <button class='bg-white text-black px-5 py-1 rounded text-xs sm:text-base md:text:lg lg:text-2xl tracking-wide font-bold'>Get Started</button>
              </div>
              
              <div class='flex items-center justify-between'>
              
                  <div class='flex-col'>
                  <h3 class='mr-4 lg:font-semibold'>10,000,000+</h3>
                  <h3 class='mr-4 text-xs md:text-sm lg:text-base font-light tracking-widest'>Music Creators</h3>
                  </div>
                  <div class='flex-col'>
                                <div class='flex items-center '>
                                <h3 class='mx-4 font-semibold'>4.8 </h3>
                                    <span class='text-xs sm:text-sm md:text-base text-yellow-500'><FaStar /></span>
                                    <span class='text-xs sm:text-sm md:text-base text-yellow-500'><FaStar /></span>
                                    <span class='text-xs sm:text-sm md:text-base text-yellow-500'><FaStar /></span>
                                    <span class='text-xs sm:text-sm md:text-base text-yellow-500'><FaStar /></span>
                                    <span class='text-xs sm:text-sm md:text-base text-yellow-500'><FaStar /></span>
                                    </div>
                  <h3 class='mx-4  text-xs font-light tracking-widest'>Rating</h3>
                  </div>
                  <div>
                      <button class='mx-2'><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"/></svg></button>
                      <button class='mx-2'><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7.6230469 3.2109375 L 18 13.585938 L 20.677734 10.908203 C 17.018734 8.6882031 12.118063 5.7100938 9.9140625 4.3710938 L 8.4375 3.4765625 C 8.1765 3.3175625 7.8970469 3.2319375 7.6230469 3.2109375 z M 6.0390625 4.453125 C 6.0180625 4.567125 6 4.6816875 6 4.8046875 L 6 25.308594 C 6 25.394594 6.0172969 25.474641 6.0292969 25.556641 L 16.585938 15 L 6.0390625 4.453125 z M 22.4375 11.976562 L 19.414062 15 L 22.384766 17.970703 C 23.958766 17.016703 25.048922 16.35425 25.169922 16.28125 C 25.704922 15.95425 26.007047 15.460875 25.998047 14.921875 C 25.990047 14.392875 25.687828 13.919906 25.173828 13.628906 C 25.058828 13.562906 23.9835 12.913563 22.4375 11.976562 z M 18 16.414062 L 7.6542969 26.759766 C 7.8552969 26.724766 8.0560469 26.664828 8.2480469 26.548828 C 8.5140469 26.386828 15.7 22.027062 20.625 19.039062 L 18 16.414062 z"/></svg></button>
                  </div>
              </div>
          </div>

          <div class=''>
          <img class='w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72  lg:w-96 lg:h-96' src="https://www.intellectdigest.in/wp-content/uploads/2017/06/5-Best-Music-Player-Apps-for-Android-Smartphone-580x550.png" alt="" />
          </div>
          
              </div>
              

               {/* FOOTER */}


          
              <div class='shadow-sm shadow-slate-300'>
          
              <footer class='flex justify-around items-center bg-gradient-to-r from-black via-black to-purple-900 p-4 text-white '>
          
                  <div>
                  <h1 class='mx-4 md:text-lg lg:text-xl font-semibold font-mono italic'>2022 Planet M Inc.</h1>
                  </div>
                  <div class='text-xs sm:text-sm md:text-base lg:text-lg font-light'>
                      <button class='mx-4'>Privacy Policy</button>
                      <button class='mx-4'>Terms And Conditions</button>
                      <button class='mx-4'>Communities</button>
                  </div>
                  <div class='mt-1'>
                      <button class='mx-4'><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"/></svg></button>
                      <button class='mx-4'><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/></svg></button>
                      <button class='mx-4'><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg></button>
                  </div>
              </footer>
              </div>
          
          </main>
      </div>
  )
}

export default Music1