import React, { useEffect } from "react";
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


const Experience = () => {
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

    useEffect(() => {
       AOS.init({duration: 2000})
  }, [])

  
  return (
      <div id="experience">
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
      </div>
  );
};

export default Experience;