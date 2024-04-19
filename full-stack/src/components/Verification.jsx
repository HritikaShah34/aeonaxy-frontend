import React, { useState } from 'react';
import { FaBasketballBall } from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";
import Logo from '../../images/logo3.png';
import image3 from "../../images/ss2.png";
import Footer from './Footer';

export default function Verification() {
const [isOpen, setIsOpen] = useState(false);
const userDataString = localStorage.getItem('userData');

const userData = JSON.parse(userDataString);

const email = userData.email;
const toggleMenu = () => {
    setIsOpen(!isOpen);
};
const profile = userData.image;
  return (
    <div>
    <nav>
      <div className="container mx-auto flex justify-between items-center border-b w-full  border-gray-100 font-bold sm:w-full">
          <div className="flex items-center">
              <img src={Logo} alt="Logo" className="h-6 m-4 mr-4" />
              <ul className="hidden md:flex md:items-center md:space-x-10 text-gray-500 text-sm font-semibold">
                  <li><a href="#">Inspiration</a></li>
                  <li><a href="#" >Find Work</a></li>
                  <li><a href="#" >Learn Design</a></li>
                  <li><a href="#" >Go Pro</a></li>
                  <li><a href="#" >Hire Designers</a></li>
              </ul>
          </div>
          <ul className="flex items-center">
              <li>
                  <form className="max-w-md mx-auto">   
                      <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
                      <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg className="w-3 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                              </svg>
                          </div>
                          <input type="search" id="default-search" className="w-24 mr-2 p-3 ps-8 text-xs text-gray-900 rounded-lg bg-gray-100" placeholder="Search" required />
                      </div>
                  </form>
              </li>
              <li><img src={profile} alt="Profile" className="h-8 w-8 rounded-full" /></li>
              <li>
                  <a href='/purpose'>
                  <button
                      type="submit"
                      className='hidden md:block md:m-2 md:p-2 border rounded-lg h-15 w-24 bg-pink-500 text-white'
                  >
                      Upload
                  </button>
                  </a>
              </li>
              <li>
              <button className="mr-3 navbar-toggle md:hidden flex items-center justify-center p-2 hover:text-gray-900 " onClick={toggleMenu}>
                  <FiMenu className="w-6 h-6" /> 
                  </button>
              </li>
          </ul>
      </div>
    </nav>

      <div className={`dropdown-menu text-center absolute bg-gray-200 w-full h-full md:hidden ${isOpen ? '' : 'hidden'}`}>
          <a href="#" className="block border-b w-full  border-gray-100 px-4 py-2">Inspiration</a>
          <a href="#" className="block border-b w-full  border-gray-100 px-4 py-2">Find Work</a>
          <a href="#" className="block border-b w-full  border-gray-100 px-4 py-2">learn Design</a>
          <a href="#" className="block border-b w-full  border-gray-100 px-4 py-2">Go Pro</a>
          <a href="#" className="block border-b w-full  border-gray-100 px-4 py-2">Hire Designers</a>
       </div>



      <div className="px-4 md:px-0"> 
        <div className='flex flex-col justify-center items-center'>
          <div className='font-bold text-2xl mb-5 text-center'>
            Please verify your email...
          </div>
          <div className='flex justify-center mb-5'>
            <img src={image3} className='h-25 w-40'/>
          </div>
          <div className='text-gray-500 text-md mb-5 text-center'> 
            Please verify your email address. We've sent a confirmation email to:
          </div>
          <div className='font-bold mb-5 text-center'> 
            {email}
          </div>
          <div className='text-gray-500 text-md mb-5 text-center'> 
            Click the confirmation link in that email to begin using Dribbble.
          </div>
          <div className='text-center text-gray-500 text-md mb-5 max-w-lg'> 
            Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If 
            you still don't see it, you can <a href="#" className="text-pink-500 font-semibold">resend the confirmation email.</a>
          </div>
          <div className='text-gray-500 text-md mb-5 text-center'> 
            Wrong email address? <a href="#" className="text-pink-500 font-semibold">Change it.</a>
          </div>
        </div>
      </div>
      <Footer /> 
      <div className="m-5 flex">
        <span className="justify-start ml-7 text-gray-600 text-sm">&copy; 2024 Dribbble. All rights reserved.</span>
        <span className="justify-end text-gray-600 text-sm ml-auto mr-7">
          <span>20,501,853 </span>
          <span className="font-bold">
            shots dribbbled
            <FaBasketballBall className="inline-block ml-1" color="#FF1493" />
          </span>
        </span>
      </div>

    </div>
  );
}
