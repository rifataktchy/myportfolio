import React from 'react';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name='about' className='w-full h-full md:h-screen lg:h-screen pt-10 bg-[#3d3d3d] lg:pl-10 text-[#fdfdfd]'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center p-10 pt-10 w-full h-full'>
        <div className='max-w-[1000px] gap-8'>
          <div className=' pb-2'>
            <p className='text-4xl font-bold inline border-[#6494ac]'>About Me</p>
          </div> 
        </div>
        <motion.div 
              className='max-w-[1000px] gap-8'
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>I am a passionate web developer with a Master’s in Management Information Systems and a Bachelor’s in Electronics and Communication Engineering. Skilled in React.js, HTML, CSS, and JavaScript, I enjoy creating responsive, user-friendly websites. My career spans roles in web development and IT education, showcasing my ability to build impactful digital solutions and foster technology-friendly environments.</motion.p>   
        </motion.div>
        <div className='max-w-[1000px] gap-8'>
          <div className='pt-4 pb-2'>
            <p className='text-2xl font-bold inline border-[#6494ac]'>Work Experience</p>
          </div>
          <p>* Web Developer, Crebsol Ltd. (Oct 2021 – Jun 2022)</p> 
          <p className='pl-2'>Developed responsive websites using JavaScript and React.</p>
          <p>* IT Teacher, Srijonshil Model School (Aug 2014 – Sep 2021)</p>
          <p className='pl-2'>Taught IT fundamentals, networking basics, and software usage to students.</p>
          <p>* Junior HTML Developer, Design Source Team Ltd. (Apr 2012 – Jul 2014)</p>
          <p className='pl-2'>Converted Figma designs into functional code using HTML and CSS.</p>
        </div>
        <div className='max-w-[1000px] gap-2'>
          <div className=' pt-4 pb-2'>
            <p className='text-2xl font-bold inline border-[#6494ac]'>Education</p>
          </div>
          <p>* Master of Science, Management Information Systems</p>
          <p className='pl-2'>   University of South-Eastern, Norway </p> 
          <p>* Bachelor of Science, Electronics and Communication Engineering</p>
          <p className='pl-2'>Southern University Bangladesh</p>
          
        </div>
      </div>
    </div>
  )
}

export default About;

