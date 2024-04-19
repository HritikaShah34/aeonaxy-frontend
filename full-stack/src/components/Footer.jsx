import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { IoBasketballOutline } from 'react-icons/io5';
import Logo from "../../images/logo4.png";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black flex flex-col md:flex-row  px-8 py-4 overflow-x-hidden">
      <div className="mb-4 ml-10 md:mb-0">
          <img src={Logo} alt="Logo" className="max-w-xs h-6 mt-8" />
          <p className='max-w-xs'>
            Dribbble is the world's leading community for creatives to share, grow, and get hired.
          </p>
          <div className="flex mt-2">
            <IoBasketballOutline className="mr-2" style={{ color: '#333333' }} />
            <FaTwitter className="mr-2" style={{ color: '#333333' }} />
            <FaFacebook className="mr-2" style={{ color: '#333333' }} />
            <FaInstagram className="mr-2" style={{ color: '#333333' }} />
            <FaPinterest className="mr-2" style={{ color: '#333333' }} />
          </div>
      </div>
      <div className="mt-7 max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">
        
        <div className="flex flex-col md:flex-row md:justify-around flex-grow">
          <div className="mb-4 md:mb-0 md:mr-6">
            <h2 className="font-bold mb-2">For designers</h2>
            <ul className="list-reset text-sm">
              <li className="mb-2">
                <a href="/">Go Pro!</a>
              </li>
              <li className="mb-2">
                <a href="/">Explore design work</a>
              </li>
              <li className="mb-2">
                <a href="/">Design blog</a>
              </li>
              <li className="mb-2">
                <a href="/">Overtime podcast</a>
              </li>
              <li className="mb-2">
                <a href="/">Playoffs</a>
              </li>
              <li className="mb-2">
                <a href="/">Weekly warm-up</a>
              </li>
              <li className="mb-2">
                <a href="/">Refer a friend</a>
              </li>
              <li className="mb-2">
                <a href="/">Code of conduct</a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 md:mr-6">
            <h2 className="font-bold mb-2">Hire designers</h2>
            <ul className="list-reset text-sm">
              <li className="mb-2">
                <a href="/">Post a job opening</a>
              </li>
              <li className="mb-2">
                <a href="/">Post a freelance project</a>
              </li>
              <li className="mb-2">
                <a href="/">Search for designers</a>
              </li>
            </ul>
            <h2 className="font-bold mb-2">Brands</h2>
            <ul className="list-reset text-sm">
              <li className="mb-2">
                <a href="/">Advertise with us</a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 md:mr-6">
            <h2 className="font-bold mb-2">Company</h2>
            <ul className="list-reset text-sm">
              <li className="mb-2">
                <a href="/">About</a>
              </li>
              <li className="mb-2">
                <a href="/">Careers</a>
              </li>
              <li className="mb-2">
                <a href="/">Support</a>
              </li>
              <li className="mb-2">
                <a href="/">Overtime podcast</a>
              </li>
              <li className="mb-2">
                <a href="/">Media kit</a>
              </li>
              <li className="mb-2">
                <a href="/">Weekly warm-up</a>
              </li>
              <li className="mb-2">
                <a href="/">Testimonials</a>
              </li>
              <li className="mb-2">
                <a href="/">API</a>
              </li>
              <li className="mb-2">
                <a href="/">Terms of service</a>
              </li>
              <li className="mb-2">
                <a href="/">Privacy policy</a>
              </li>
              <li className="mb-2">
                <a href="/">Cookie policy</a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 md:mr-6">
            <h2 className="font-bold mb-2">Directories</h2>
            <ul className="list-reset text-sm">
              <li className="mb-2">
                <a href="/">Design jobs</a>
              </li>
              <li className="mb-2">
                <a href="/">Designers for hire</a>
              </li>
              <li className="mb-2">
                <a href="/">Freelance designers for hire</a>
              </li>
              <li className="mb-2">
                <a href="/">Tags</a>
              </li>
              <li className="mb-2">
                <a href="/">Places</a>
              </li>
            </ul>
            <h2 className="font-bold mb-2">Design assets</h2>
            <ul className="list-reset text-sm">
              <li className="mb-2">
                <a href="/">Dribbble Marketplace</a>
              </li>
              <li className="mb-2">
                <a href="/">Creative Market</a>
              </li>
              <li className="mb-2">
                <a href="/">Fontspring</a>
              </li>
              <li className="mb-2">
                <a href="/">Font Squirrel</a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 md:mr-6">
            <h2 className="font-bold mb-2">Design Resources</h2>
            <ul className="list-reset text-sm">
              <li className="mb-2">
                <a href="/">Freelancing</a>
              </li>
              <li className="mb-2">
                <a href="/">Design Hiring</a>
              </li>
              <li className="mb-2">
                <a href="/">Design Portfolio</a>
              </li>
              <li className="mb-2">
                <a href="/">Design Education</a>
              </li>
              <li className="mb-2">
                <a href="/">Places</a>
              </li>
              <li className="mb-2">
                <a href="/">Creative Process</a>
              </li>
              <li className="mb-2">
                <a href="/">Design Industry Trends</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
