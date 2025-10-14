import React from 'react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full lg:h-screen pt-20 bg-[#3d3d3d] flex flex-col justify-center items-center p-6"
    >
      {/* Upper Section */}
      <div className="pt-10 flex flex-col lg:flex-row lg:justify-center lg:items-center lg:w-3/4">
        {/* Form Section */}
        <div className="flex flex-col items-center max-w-[700px] w-full mb-6 lg:mb-0 lg:w-1/2">
          <form
            method="POST"
            action="https://getform.io/f/bxoonqna"
            className="flex flex-col w-full"
          >
            <div className="py-2">
              <p className="text-4xl font-bold inline border-b-4 text-[#fdfdfd] border-[#6494ac]">
                Contact
              </p>
              <p className="text-[#fdfdfd] py-2">
                Submit the form below, and I’ll get back to you.
              </p>
            </div>
            <input
              className="bg-white p-2 text-black rounded-md"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 bg-white text-black rounded-md"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-white p-2 text-black rounded-md"
              name="message"
              rows="8"
              placeholder="Message"
            ></textarea>
            <br />
            <button className="text-[#fdfdfd] border-2 hover:bg-[#6494ac] hover:border-gray-500 px-4 py-2 mt-2 mx-auto flex items-center rounded-md">
              Let's Collaborate
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-left lg:pl-10 lg:ml-20">
          <p className="text-[#fdfdfd] mb-2">
            <strong>Location:</strong> Ingolstadt, Germany
          </p>
          <p className="text-[#fdfdfd] mb-2">
            <strong>Email:</strong> rifataktchy@gmail.com
          </p>
          <p className="text-[#fdfdfd]">
            <strong>Phone/Whatsapp:</strong> +49 15757346499
          </p>
        </div>
      </div>

      {/* Lower Section */}
      <div className="flex flex-col items-center w-full mt-8 text-white text-sm mb-10">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          {/* <a
            className="hover:text-[#6494ac]"
            href="https://www.facebook.com/decorellactg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a> */}
          {/* <a
            className="hover:text-[#6494ac]"
            href="mailto:rifataktchy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineMail size={30} />
          </a> */}
          {/* <a
            className="hover:text-[#6494ac]"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a> */}
        </div>
        <p>Rifhat Akther Chowdhury © 2025. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Contact;


