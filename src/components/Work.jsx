import React from 'react';

import design from '../assets/design.PNG';
import decorella from '../assets/decorella.PNG';
import pet from '../assets/pet.PNG';
import cricket from '../assets/cricket.PNG';
import donate from '../assets/donate.PNG';
import gadget from '../assets/gadget.JPG';
import matrimony from '../assets/matrimony.jpg';
import merathon from '../assets/merathon.jpg';
import donations from '../assets/donations.JPG';
import donationDB from '../assets/donationDB.JPG';
import project1 from "../assets/project1.pdf"
import project2 from "../assets/project2.pdf"
import project3 from "../assets/project3.pdf"
import project4 from "../assets/project4.pdf"
import project5 from "../assets/project5.pdf"
const Work = () => {
  return (
    <div name='work' className='w-full pt-20 p-10 h-full lg:h-screen lg:pt-10 bg-[#3d3d3d] text-[#fdfdfd]'>
      <div className='max-w-[1100px] mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#6494ac] text-black-300'>Projects</p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>

        {/* Grid container for project cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

        <div style={{ backgroundImage: `url(${matrimony})`, backgroundSize: 'cover' }} className='h-[280px] shadow-lg shadow-[#6c6c6d] group container rounded-md flex justify-center items-center mx-auto contect-div'>
            <div className='opacity-0 group-hover:opacity-100 pl-8'>
              <span className='text-1xl font-bold rounded-t-lg bg-[#6494ac] p-2 text-white-600 tracking-wider'>
                React+firebase+express
                </span>
              <p className='text-1xl font-bold rounded-b-lg bg-[#6494ac] p-2 text-white-600'>+mongoDB+JWT+Stripe</p>
             
              <div className="pt-3 text-left flex-col">
              <a href='https://bd-matrimony.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#6494ac] text-white font-bold text-lg">
                    Live
                  </button>
                </a>
              <a className='flex justify-between items-center w-full text-gray-300' href={project4} target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#6494ac] text-white font-bold text-lg">
                    View Detail
                  </button>
                            </a>
                {/* <a href='https://crowdcubewebsite.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href='https://crowdcubewebsite.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a> */}
              </div>
            </div>
          </div>

          {/* Design project */}
          {/* <div style={{ backgroundImage: `url(${design})`, backgroundSize: 'cover' }} className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
            <div className='opacity-0 group-hover:opacity-100 pl-8 pt-3'>
              <span className='text-1xl font-bold text-white tracking-wider'>
                Javascript real Project
              </span>
              <div className="pt-10 text-center">
                <a href='https://github.com/rifataktchy/design-source' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href='https://rifataktchy.github.io/design-source/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          {/* Donate project */}
          {/* <div style={{ backgroundImage: `url(${donate})`, backgroundSize: 'cover' }} className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
            <div className='opacity-0 group-hover:opacity-100 pl-5'>
              <span className='text-xl font-bold text-black tracking-wider'>
                JavaScript Application Project
              </span>
              <div className="pt-10 text-center">
                <a href='https://github.com/rifataktchy/Assignment-5' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href='https://rifataktchy.github.io/Assignment-5/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          {/* Pet project */}
          {/* <div style={{ backgroundImage: `url(${pet})`, backgroundSize: 'cover' }} className='h-[180px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-1xl font-bold text-black tracking-wider'>
                javaScript Project
              </span>
              <div className="pt-10 text-center">
                <a href='https://github.com/rifataktchy/peddy-pet-shop' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href='https://peddy-a-pet-shop.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div> */}

<div style={{ backgroundImage: `url(${merathon})`, backgroundSize: 'cover' }} className='h-[280px] shadow-lg shadow-[#6c6c6d] group container rounded-md flex justify-center items-center mx-auto contect-div'>
            <div className='opacity-0 group-hover:opacity-100 pl-8'>
            <span className='text-1xl font-bold rounded-t-lg bg-[#6494ac] p-2 text-white-600 tracking-wider'>
                React+firebase+express
                </span>
              <p className='text-1xl font-bold rounded-b-lg bg-[#6494ac] p-2 text-white-600'>+mongoDB</p>
              <div className="pt-3 text-left flex-col">
              <a href='https://merathon-management-system.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#6494ac] text-white font-bold text-lg">
                    Live
                  </button>
                </a>
              <a className='flex justify-between items-center w-full text-gray-300' href={project5} target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#6494ac] text-white font-bold text-lg">
                    View Detail
                  </button>
                            </a>
                {/* <a href='https://crowdcubewebsite.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href='https://crowdcubewebsite.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a> */}
              </div>
            </div>
          </div>

          {/* Decorella project */}
          <div style={{ backgroundImage: `url(${decorella})`, backgroundSize: 'cover' }} className='h-[280px] shadow-lg shadow-[#6c6c6d] group container rounded-md flex justify-center items-center mx-auto contect-div'>
            <div className='opacity-0 group-hover:opacity-100 pl-8'>
              <span className='text-1xl font-bold rounded-lg bg-[#6494ac] p-2 text-white-600 tracking-wider'>
                React Website
                </span>
              
             
              <div className="pt-3 text-left flex-col">
              <a href='https://rifataktchy.github.io/decorella-website/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#6494ac] text-white font-bold text-lg">
                    Live
                  </button> 
                </a>
                <a href={project1} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#6494ac] text-white font-bold text-lg">
                    View Detail
                  </button>
                </a>
          
              </div>
            </div>
          </div>
          

          {/* Cricket project */}
          {/* <div style={{ backgroundImage: `url(${cricket})`, backgroundSize: 'cover' }} className='h-[180px] shadow-lg shadow-[#6c6c6d] group container rounded-md flex justify-center items-center mx-auto contect-div'>
            <div className='opacity-0 group-hover:opacity-100 pl-8'>
              <span className='text-1xl font-bold text-blue-600 tracking-wider'>
                React Project
              </span>
              <div className="pt-3 text-center">
                <a href='https://dream11-cricket-team.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href='https://dream11-cricket-team.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          {/* Gadget project */}
          {/* <div style={{ backgroundImage: `url(${gadget})`, backgroundSize: 'cover' }} className='h-[180px] shadow-lg shadow-[#6c6c6d] group container rounded-md flex justify-center items-center mx-auto contect-div'>
            <div className='opacity-0 group-hover:opacity-100 pl-8'>
              <span className='text-1xl font-bold text-black tracking-wider'>
                React Project
              </span>
              <div className="pt-3 text-center">
                <a href='https://gadget-heaven-rifhat.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href='https://gadget-heaven-rifhat.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          

          <div style={{ backgroundImage: `url(${donationDB})`, backgroundSize: 'cover' }} className='h-[280px] shadow-lg shadow-[#6c6c6d] group container rounded-md flex justify-center items-center mx-auto contect-div'>
            <div className='opacity-0 group-hover:opacity-100 pl-8'>
            <span className='text-1xl font-bold rounded-t-lg bg-[#6494ac] p-2 text-white-600 tracking-wider'>
                React+firebase+express
                </span>
              <p className='text-1xl font-bold rounded-b-lg bg-[#6494ac] p-2 text-white-600'>+mongoDB</p>
              <div className="pt-3 text-left flex-col">
              <a href='https://crowdcubewebsite.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-left rounded-lg px-4 py-3 m-2 bg-[#6494ac] text-white font-bold text-lg">
                    Live
                  </button>
                </a>
              <a className='flex justify-between items-center w-full text-gray-300' href={project3} target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#6494ac] text-white font-bold text-lg">
                    View Detail
                  </button>
                            </a>
                {/* <a href='https://crowdcubewebsite.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href='https://crowdcubewebsite.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a> */}
              </div>
            </div>
          </div>

        </div> {/* End of grid container */}
        
      </div> {/* End of max-w container */}
    </div> // End of main container
  );
};

export default Work;
