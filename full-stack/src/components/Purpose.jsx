import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../images/logo3.png";
import MyCard from './MyCard';


export default function Purpose() {
  const navigate=useNavigate()
  const [checkedCards, setCheckedCards] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const handleCardSelection = (cardId, isChecked) => {
    let updatedCheckedCards;
  
    if (isChecked) {
      updatedCheckedCards = [...checkedCards, cardId];
    } else {
      updatedCheckedCards = checkedCards.filter(id => id !== cardId);
    }
    setCheckedCards(updatedCheckedCards);
    setIsFormValid(updatedCheckedCards.length > 0);
  };
  
  const handleSubmit = () => {
    console.log(checkedCards)
    const existingData = JSON.parse(localStorage.getItem('userData')) || {};
    const updatedData = {
      ...existingData,
      purpose: checkedCards,
    };
    console.log(updatedData)
    
    localStorage.setItem('userData', JSON.stringify(updatedData));
    console.log("started")

    const fetchData = async () => {
      try {
        const userDataString = localStorage.getItem('userData');
        const userData = JSON.parse(userDataString);
        const response = await axios.post('https://backend-deployment-3.onrender.com/create-user', userData);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    
    const sendEmail = async () => {
      try {
        const userDataString = localStorage.getItem('userData');
        const userData = JSON.parse(userDataString);
        console.log(userData.email)
        // ,{"email":userData.email}
        const response = await axios.post('https://backend-deployment-3.onrender.com/send-email');
        console.log(response);
      } catch (error) {
        console.error('Error sending mail:', error);
      }
    };

    sendEmail()

    navigate("/verification")

  };

  return (
    <div >
      <img src={Logo} alt="Logo" className="h-6 ml-6 sm:h-6 mt-8" />
      <div className='m-5 md:mt-0'>
      <div className='flex justify-center text-center font-bold mt-5 text-2xl md:text-2xl md:mt-0 mb-5'>
        What brings you to Dribbble?  
      </div>
      <div className='flex justify-center text-center font-semibold text-gray-400 text-base md:text-lg mb-6 md:mb-10'>
        Select the options that best describe you. Don't worry, you can explore other options later.
      </div>

      <div className='flex flex-col md:flex-row justify-center '>
        <div className='flex justify-center mt-10 '>
          <MyCard cardId={1} onSelect={handleCardSelection} />
        </div>
        <div className='flex justify-center mt-10 md:ml-10'>
          <MyCard cardId={2} onSelect={handleCardSelection} />
        </div>
        <div className='flex justify-center mt-10 md:ml-10'>
          <MyCard cardId={3} onSelect={handleCardSelection} />
        </div>
      </div>


      <div className={`flex justify-center  text-center font-bold text-sm md:text-md mt-6 md:mt-10 ${isFormValid ? '' : 'opacity-0'}`}>
        Anything else? You can select multiple.
      </div>

      <div className='flex justify-center'>
        {/* <a href='/verification'> */}
        <button
          type="submit"
          onClick={handleSubmit}
          className={`mt-2 p-3 border rounded-md max-h-sm w-48 md:w-56 font-bold bg-pink-500 text-white ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!isFormValid}
        >
          Finish
        </button>
        {/* </a> */}
    </div>

        {isFormValid && (
          <div className='flex justify-center'>
            <a href='/'>
              <button
                type="submit"
                className="ml-2 md:ml-10 mt-2 md:mt-4 text-gray-400 text-sm md:text-base font-semibold"
              >
                or Press RETURN
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
