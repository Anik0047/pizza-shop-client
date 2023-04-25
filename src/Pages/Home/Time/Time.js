import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const Time = () => {
    return (
        <>
            <div class="grid grid-cols-1 md:grid-cols-6 ">
                <div class="bg-black">
                </div>
                <div class="bg-black py-10">
                    <div class="text-sm font-semibold">
                        <h3 className='text-white'><FaPhoneAlt className='text-white inline me-2 -mt-1'></FaPhoneAlt> 000 (123) 456 7890</h3>
                        <p className='text-slate-400'>A small river named Duden flows</p>
                    </div>
                </div>
                <div class="bg-black py-10">
                    <div class="text-sm font-semibold">
                        <h3 className='text-white'><FaMapMarked className='text-white inline me-3 -mt-1'></FaMapMarked>198 West 21th Street</h3>
                        <p className='text-slate-400'>Suite 721 New York NY 10016</p>
                    </div>
                </div>
                <div class="bg-black py-10">
                    <div class="text-sm font-semibold">
                        <h3 className='text-white'><FaRegClock className='text-white inline me-3 -mt-1'></FaRegClock>Open Monday-Friday</h3>
                        <p className='text-slate-400'>8:00am - 9:00pm</p>
                    </div>
                </div>
                <div className=' flex justify-center items-center bg-amber-500 py-10'>
                    <FaTwitter></FaTwitter>
                    <FaFacebookF className='mx-5'></FaFacebookF>
                    <FaInstagram></FaInstagram>
                </div>
                <div className='bg-amber-500'>  
                </div>
            </div>

        </>
    );
};

export default Time;