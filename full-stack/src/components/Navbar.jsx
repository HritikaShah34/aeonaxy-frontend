import { default as React, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import Logo from '../../images/logo3.png';
import Profile from '../../images/photo1.jpg';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav>
        <div className="container mx-auto flex justify-between items-center border-b w-full mb-4 border-gray-100 font-bold sm:w-full">
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
                    <form class="max-w-md mx-auto">   
                        <label for="default-search" class="mb-2 text-sm font-medium sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-3 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="w-24 mr-2 p-3 ps-8 text-xs text-gray-900 rounded-lg bg-gray-100" placeholder="Search" required />
                        </div>
                    </form>
                </li>
                <li><img src={Profile} alt="Profile" className="h-8 w-8 rounded-full" /></li>
                <li>
                    <a href='/purpose'>
                    <button
                        type="submit"
                        className='hidden md:m-2 md:p-2 border rounded-lg h-15 w-24 bg-pink-500 text-white'
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
            <div className={`dropdown-menu absolute bg-gray-900 text-white rounded-md mt-2 md:hidden ${isOpen ? '' : 'hidden'}`}>
         <a href="#" className="block px-4 py-2 hover:text-gray-300">Home</a>
         <a href="#" className="block px-4 py-2 hover:text-gray-300">About</a>
         <a href="#" className="block px-4 py-2 hover:text-gray-300">Service 1</a>
        <a href="#" className="block px-4 py-2 hover:text-gray-300">Service 3</a>
         <a href="#" className="block px-4 py-2 hover:text-gray-300">Contact</a>
       </div>
        </div>
    </nav>
  );
};

export default Navbar;


