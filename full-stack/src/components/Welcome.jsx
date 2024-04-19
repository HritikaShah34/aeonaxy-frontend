import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultImage from "../../images/camera.jpeg";
import Logo from "../../images/logo3.png";
import Uploading from './Uploading';
import "./Welcome.css";

export default function Welcome() {
    const [selectedImage, setselectedImage] = useState("")
  const [avatarURL, setAvatarURL] = useState(DefaultImage);
  const [location, setLocation] = useState('');
  const[loader, setLoader] = useState(false)
  const fileUploadRef = useRef();
  
  const navigate = useNavigate()

  const upload=async()=>{
    
    console.log("entered")
    const formData = new FormData()
    formData.append("file", selectedImage)
    formData.append("upload_preset", "eoetovgb")

    setLoader(true)
    const img = await fetch("https://api.cloudinary.com/v1_1/dwxyaolk3/upload", {
        method: "POST",
        body: formData
    })
    console.log("done")
    setLoader(false)
    console.log(img)    

    if (img.ok) {
      const data = await img.json();
      console.log("okay")
      const imageUrl = `https://res.cloudinary.com/dwxyaolk3/image/upload/v${data.version}/${data.public_id}.${data.format}`;
      console.log('Uploaded Image URL:', imageUrl);
      setselectedImage(imageUrl)
    } else {
      console.error('Failed to upload image:', img.statusText);
      alert("Uploaded")
    }

}
  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };


  const uploadImageDisplay = async (e) => {
    const uploadedFile = fileUploadRef.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);
    setAvatarURL(cachedURL)
  const reader = new FileReader();
  
  reader.onload = () => {
    const fileContent = reader.result; 
    setselectedImage("")
    setselectedImage(fileContent)
  };
  
  reader.readAsDataURL(uploadedFile); 

  upload()

  }

  const isFormValid = () => {
    return avatarURL !== DefaultImage && location.trim() !== '';
  };

  const handleNextClick = () => {
    console.log('Avatar URL:', avatarURL);
    console.log('Location:', location);
    console.log(selectedImage)
    const existingData = JSON.parse(localStorage.getItem('userData')) || {};
    const updatedData = {
      ...existingData,
      image: selectedImage,
      location: location
    };
    
    localStorage.setItem('userData', JSON.stringify(updatedData));
    
    navigate("/purpose");
  };

  return (
    <div>
        <div>
        {loader && <Uploading />}
        </div>
    <img src={Logo} alt="Logo" className="h-6 ml-6 sm:h-6 mt-8" />
    <div className='flex flex-col justify-center items-center'>
        <div className='text-center md:text-left m-2'>
            <div className='font-bold text-2xl mt-5 mb-5'>
                Welcome! Let's create your profile
            </div>
            <div className='text-gray-400 text-lg mb-10 font-semibold text-center md:text-left '>
                Let others get to know you better! You can do these later
            </div>
            <div className='font-bold text-2xl mb-4 text-center md:text-left'>
                Add an avatar
            </div>

            <div className='flex flex-col justify-center items-center md:flex-row md:justify-start mb-4'>
                <img
                    src={avatarURL}
                    alt="Avatar"
                    className={`h-48 w-48 rounded-full p-4 ${
                        avatarURL === DefaultImage ? 'border border-gray-500 border-opacity-50 border-dashed border-2' : ''
                    }`}
                />
                <div className="flex flex-col md:ml-10 mt-4 md:mt-0">
                    <form id="form" encType="multipart/form-data">
                        <button
                            type="submit"
                            onClick={handleImageUpload}
                            className="pl-2 pr-2 pt-2 pb-2 border rounded-md h-12 md:h-29 md:w-29 font-bold"
                        >
                            Choose image
                        </button>
                        {/* <div onClick={upload}>Upload</div>   */}
                        <input type="file" id="file" ref={fileUploadRef} onChange={uploadImageDisplay} hidden />
                    </form>
                    <button
                        onClick={handleImageUpload}
                        className="mt-4 text-gray-400 text-md font-semibold md:block"
                    >
                        {'>'} Or choose one of our defaults
                    </button>
                </div>
            </div>

            <div className='mt-10 font-bold text-2xl text-center md:text-left'>
                Add your location
            </div>

            <div>
                <input 
                    type="text" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-6 pb-3 border-b w-full mb-4 border-gray-300 font-bold sm:w-full" 
                    placeholder="Enter a location" 
                />
            </div>

            <div>
                <button
                    type="submit"
                    onClick={handleNextClick}
                    className={`mt-5 p-3 border rounded-md h-22 w-56 font-bold bg-pink-500 text-white ${isFormValid() ? '' : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isFormValid()}
                >
                    Next
                </button>
            </div>
            
            <div>
                <button
                type="submit"
                onClick={()=>navigate("/")}
                className={`ml-10 mt-4 text-gray-400 text-sm font-semibold opacity-100 ${isFormValid() ? '' : 'hidden'}`}
                >
                or Press RETURN
                </button>
                    
            </div>
      </div>
    </div>
    </div>
  );
}
