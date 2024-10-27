import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import background from '../assets/background.jpg';
import pp from '../assets/pp.jpeg';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Home = () => {
    return (
    <div name='home' className= 'w-full h-full lg:h-screen md:h-screen pt-20 lg:pt-10 bg-[#3d3d3d]' >

        {/*container*/ }
        <div className='max-w-[1000px] mx-auto px-8 pt-10 mt-10 flex flex-col md:flex-row lg:flex-row h-full'>
          <div className='w-full flex flex-col justify-center'>
          <p className='w-full lg:w-1/2 text-purple-500'>Hi</p>
          <h1 className='text-4xl sm:text-5xl font-bold text-[#8b8bb3]'>I'm</h1>
          <h2 className='text-2xl sm:text-5xl font-bold text-[#fdfdfd]'>Rifhat Akther Chowdhury</h2>
          <p className='text-[#8a91a3] py-4 text-2xl font-bold max-w-[700px] '>Web Developer</p>
          <button className='text-white w-[160px] rounded-lg group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6494ac]'>
            <Link to='work' smooth={true} duration={500}>
            View Work
            </Link>
             <span className='group-hover:rotate-90 duration-300'>
             <HiArrowNarrowRight className='ml-3 '/>
             </span>
         </button>
          </div>
          <div className='w-full lg:w-full'>
            <img className="rounded-full pt-4 md:h-full" src={pp} alt=""/>
          </div>
        <div>

         
      </div>
   </div>  
</div>
  )
}

export default Home;