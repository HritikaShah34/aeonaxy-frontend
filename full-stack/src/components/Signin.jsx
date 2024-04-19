import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import image1 from '../../images/photo1.jpg';
import { useData } from './DataContext';

export default function Signin() {
  const {setEmail} = useData()
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, username, email, password } = userData;
    if (name && username && email && password && userData.agreed) {
      console.log("Submitting user data:", userData);
      console.log(email)
           setEmail(email)
           setUserData({
            name: '',
            username: '',
            email: '',
            password: '',
          });
          localStorage.setItem('userData', JSON.stringify(userData));
          navigate("/welcome");

          window.location.href = "/welcome";
        } else {
          alert("Please fill all details and agree to the terms.");
        }
      };
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUserData(prevData => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value
        }));
      };

      const [username, setUsername] = useState('');
      const [usernameExists, setUsernameExists] = useState(false);
    
      const handleuname = (event) => {
        const { name, value, type, checked } = event.target;
        setUserData(prevData => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value
        }));
        const newUsername = event.target.value;
        setUsername(newUsername);
        checkUsernameExists(newUsername);
      };
    
      const checkUsernameExists = async (newUsername) => {
        try {
          console.log("entered")
          const response = await axios.post('https://backend-deployment-3.onrender.com/check-username', { username: newUsername });
          setUsernameExists(response.data.exists);
          console.log(response.data.exists)
        } catch (error) {
          console.error('Error checking username:', error);
        }
      };
    
      return (
        <div >
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <img className='col-span-1 md:col-span-1 h-full w-full' src={image1} alt="Photo" />
            <div className='col-span-1 md:col-span-2'>
              {/* <div className="text-red-600 font-bold">{!userData.firstName || !userData.username || !userData.email || !userData.password || !userData.agreed || "Please fill all details and agree to the terms."}</div> */}
              <form onSubmit={handleSubmit}>
                <div className='mt-5 mr-3 flex justify-center md:justify-end font-semibold'>
                  Already a member? <a href="/" className="text-blue-500 hover:underline"> Sign In</a>
                </div>
    
                <div className='flex flex-col justify-center items-center'>
                  <div className='text-center md:text-left'>
                    <div className='m-5 mt-10 font-bold text-2xl'>
                      Sign Up to Dribble
                    </div>
    
                    <div className='mt-10 m-5 flex flex-col md:flex-row justify-center md:justify-start'>
                      <div className="mb-5 md:mb-5 md:mr-5">
                        <div className='font-bold text-xl'>
                          Name
                        </div>
                        <input type="text" id="first_name" name="name" value={userData.name} onChange={handleChange} className="bg-gray-200 rounded-md block p-2 w-full" required />
                      </div>
                      <div className="mt-10 md:mt-0">
                        <div className='font-bold text-xl'>
                          Username
                        </div>
                        <input type="text" id="username" name="username" value={userData.username} onChange={handleuname} className="bg-gray-200 rounded-md block p-2 w-full" required />
                        {usernameExists && (
        <p className="text-red-500 mt-1">This username is already taken. Please choose a different one.</p>
      )}
                      </div>
                    </div>
    
    
                    <div className='mt-10 flex flex-col md:mt-0'>
                      <div className='m-5 mb-5 font-bold text-xl'>
                        Email
                        <input type="text" id="email" name="email" value={userData.email} onChange={handleChange} className="bg-gray-200 rounded-md block p-2 w-full" required />
                      </div>
                      <div className='m-5 font-bold text-xl'>
                        Password
                        <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} className="bg-gray-200 rounded-md block p-2 w-full" required />
                      </div>
                    </div>
    
    
                    <div className='mt-4 flex items-center m-5'>
                      <input type="checkbox" id="agree" name="agreed" checked={userData.agreed} onChange={handleChange} className="rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-12 w-12 mr-2 sm:h-6 sm:w-6" required />
                      <div className="text-base text-gray-600 max-w-sm font-semibold">
                        Creating an account means you're okay with our
                        <a href='' className='text-blue-800'> Terms of Service</a>,
                        <a href='' className='text-blue-800'> Privacy Policy</a>, and our default
                        <a href='' className='text-blue-800'> Notification Settings</a>.
                      </div>
                    </div>

                    <div className="mt-10 m-5">
                      <button type="submit" onClick={handleSubmit} className="bg-pink-500 text-white font-bold py-2 px-4 rounded-lg ">
                        Create Account
                      </button>
                    </div>
    
                    <div>
                      <div className="m-5 text-base text-sm text-gray-600 max-w-sm"> This site is protected by reCAPTCHA and Google
                        <a href='' className='text-blue-800'> Privacy Policy</a> and <a href='' className='text-blue-800'> Terms of Service </a> apply. </div>
                    </div>
    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
    