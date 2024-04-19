import React, { useState } from 'react';
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import image2 from "../../images/purpose1.png";

export default function MyCard({ cardId, onSelect }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); 

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setIsDescriptionVisible(newCheckedState); 
    onSelect(cardId, newCheckedState); 
  };

  return (
    <div>
     <div className={`w-80 h-80 max-w-sm bg-white rounded-lg shadow-md p-6 text-center overflow-y-hidden ${isChecked ? 'border border-pink-500' : 'border border-gray-300'}`} >
        <div
          className={`transition-all duration-500 ${
            isDescriptionVisible ? '-translate-y-16' : 'translate-y-0'
          }`}
           
        >
          <img
            src={image2}
            alt="Golden Shoe"
            className="w-42 h-38 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold ">I am looking to hire a designer</h2>

          {isDescriptionVisible && (
            <div className={`text-gray-700 m-5 transition-opacity duration-500 opacity-100`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. scing
              nec, ultricies sed, dolor.
            </div>
          )}
          
          <div className='flex justify-center m-10'>
            <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
                icon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center", 
                      alignItems: "center", 
                      backgroundColor: isChecked ? "#EE3371" : "",
                      height: "100%", 
                      width: "100%", 
                    }}
                  >
                    <Icon.FiCheck color={isChecked ? "white" : ""} size={20} /> 
                  </div>
                }
                borderColor={isChecked ? "#EE3371" : ""} 
                borderRadius={20} 
                style={{ overflow: "hidden" }}
                size={25}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
