import React from 'react';
import {FaCalendar, FaPhone, FaLocationArrow } from "react-icons/fa";

const Contact_Details = () => {
    return (
        <div className='w-full h-[250px] bg-black flex my-20 items-center justify-around rounded-lg'>
            <div className='flex items-center'>
                <FaCalendar className='text-4xl me-4 text-[#FF3811]'/>
                <div>
                    <p className='font-semibold text-white'>We are open monday-friday</p>
                    <h1 className='text-3xl font-bold text-white'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex items-center'>
                <FaPhone className='text-4xl me-4 text-[#FF3811]'/>
                <div>
                    <p className='font-semibold text-white'>Have a question?</p>
                    <h1 className='text-3xl font-bold text-white'>+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex items-center'>
                <FaLocationArrow className='text-4xl me-4 text-[#FF3811]'/>
                <div>
                    <p className='font-semibold text-white'>Need a repair? our address</p>
                    <h1 className='text-3xl font-bold text-white'>Liza Street, New York</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Contact_Details;