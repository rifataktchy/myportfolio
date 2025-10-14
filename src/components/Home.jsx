import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import pp from '../assets/pp.png';

const Home = () => {
  return (
    <div name="home" className="w-full h-full lg:h-screen md:h-screen pt-20 lg:pt-10 lg:pl-10 bg-[#3d3d3d]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 pt-10 mt-10 flex flex-col md:flex-row lg:flex-row h-full">
        {/* Left Content */}
        <div className="w-full flex flex-col justify-center items-start text-center md:text-left md:w-1/2">
          <p className="w-full lg:w-1/2 text-purple-500 text-lg sm:text-xl"></p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#8b8bb3]">I'm</h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#fdfdfd]">Rifhat Akther Chowdhury</h2>
          <p className="text-[#8a91a3] py-4 text-xl sm:text-2xl font-bold max-w-[700px]">Web Developer</p>
          <button className="text-white w-[160px] rounded-lg group border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-[#6494ac]">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>

        {/* Right Content */}
        <div className="flex flex-col p-6 justify-center items-center mt-8 md:mt-0 md:w-1/2">
          <img
            className="rounded-t-xl"
            src={pp}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
