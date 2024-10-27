import React from 'react';

import design from '../assets/design.PNG';
import decorella from '../assets/decorella.PNG';
import pet from '../assets/pet.PNG';
import cricket from '../assets/cricket.PNG';
import donate from '../assets/donate.PNG';

const Work = () => {
  return (
    <div name='work' className='w-full h-full lg:h-screen lg:pt-10 bg-[#3d3d3d] text-[#fdfdfd]'>
       <div className='max-w-[1000px] mx-auto p-20 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#6494ac] text-black-300'>Projects</p>
            <p className='py-6'>Check out some of my recent projects</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>

          <div style={{ backgroundImage: `url(${design})`, backgroundSize: 'cover' }} className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              <div className='opacity-0 group-hover:opacity-100 pl-8 pt-3'> 
                <span className='text-2xl font-bold text-pwhite tracking-wider'>
                  Javascript real Project
                </span>
                <div className="pt-10 text-center ">
                <a href='https://github.com/rifataktchy/design-source' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
                </a>
                <a href='https://rifataktchy.github.io/design-source/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
          </div>

          <div style={{ backgroundImage: `url(${donate})`, backgroundSize: 'cover' }} 
            className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              <div className='opacity-0 group-hover:opacity-100 pl-5'> 
                <span className='text-2xl font-bold text-black tracking-wider'>
                  JavaScript Application Project
                </span>
                <div className="pt-10 text-center ">
                <a href='https://github.com/rifataktchy/Assignment-5' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-700 text-white font-bold text-lg">
                  Code
                </button>
                </a>
                <a href='https://rifataktchy.github.io/Assignment-5/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-700 text-white font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
          </div>

          <div style={{ backgroundImage: `url(${pet})`, backgroundSize: 'cover' }} 
            className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              <div className='opacity-0 group-hover:opacity-100'> 
                <span className='text-2xl font-bold text-black tracking-wider'>
                  javaScript Project
                </span>               
                <div className="pt-10 text-center ">
                <a href='https://github.com/rifataktchy/peddy-pet-shop' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-700 text-white font-bold text-lg ">
                  Code
                </button>
                </a>
                <a href='https://peddy-a-pet-shop.netlify.app/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-700 text-white font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
          </div>

          <div style={{ backgroundImage: `url(${decorella})`, backgroundSize: 'cover' }} className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              <div className='opacity-0 group-hover:opacity-100 pl-8 pt-3'> 
                <span className='text-2xl font-bold text-gray-700 tracking-wider'>
                  React Application Project
                </span>
                <div className="pt-10 text-center ">
                <a href='https://github.com/rifataktchy/decorella-website' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-700 text-white font-bold text-lg">
                  Code
                </button>
                </a>
                <a href='https://rifataktchy.github.io/decorella-website/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-gray-700 text-white font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
          </div>
          
          
          <div style={{ backgroundImage: `url(${cricket})`, backgroundSize: 'cover' }} 
            className='h-[180px] shadow-lg shadow-[#6c6c6d] group container rounded-md flex justify-center items-center mx-auto contect-div'>
              <div className='opacity-0 group-hover:opacity-100 pl-8'> 
                <span className='text-2xl font-bold text-blue-600 tracking-wider'>
                  React Project
                </span>
                <div className="pt-3 text-center ">
                <a href='https://dream11-cricket-team.netlify.app/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
                </a>
                <a href='https://dream11-cricket-team.netlify.app/' target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
                </a>
                </div>
              </div>
            </div>
          </div>
          

          </div>
        
          
       </div>
    
  )
}

export default Work;