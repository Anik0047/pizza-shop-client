import React from 'react';
import img1 from '../../images/New Project (6).jpg';
import img2 from '../../images/New Project (7).jpg';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black py-20 text-white'>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-4 gap-x-2'>
                    <div className='text-left ps-3 md:ps-0'>
                        <h1 className='text-lg'>About Us</h1>
                        <p className='py-8'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className='flex'>
                            <FaTwitter className='text-2xl'></FaTwitter>
                            <FaInstagram className=' mx-5 text-2xl'></FaInstagram>
                            <FaFacebookF className='text-2xl'></FaFacebookF>
                        </div>
                    </div>
                    <div className='ps-3 md:ps-0 py-20 md:py-0'>
                        <h1 className='pb-8 text-left md:text-center text-lg'>RECENT BLOG</h1>
                        <div className='flex pb-2'>
                            <div>
                                <img className='w-24 md:w-40' src={img1} alt=''></img>
                            </div>
                            <div className='ps-2'>
                                <p className='text-sm md:text-base pb-4'>Even the all-powerful Point has no control about</p>
                                <div className='flex text-xs md:text-sm'>
                                    <FaCalendarAlt className='text-sm'></FaCalendarAlt>
                                    <small className='mx-3'> Sept 15, 2022</small>
                                    <FaUserAlt className='text-sm'></FaUserAlt>
                                    <small className='ms-2'>admin</small>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <img className='w-24 md:w-40' src={img2} alt=''></img>
                            </div>
                            <div className='ps-2'>
                                <p className='text-sm md:text-base pb-4'>Even the all-powerful Point has no control about</p>
                                <div className='flex text-xs md:text-sm'>
                                    <FaCalendarAlt className='text-sm'></FaCalendarAlt>
                                    <small className='mx-3'> Sept 15, 2022</small>
                                    <FaUserAlt className='text-sm'></FaUserAlt>
                                    <small className='ms-2'>admin</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-left md:text-center ps-3 md:ps-0'>
                        <h1 className='pb-8 text-lg'>SERVICES</h1>
                        <h5 className='pb-4 '>Cooked</h5>
                        <h5 className='pb-4'>Deliver</h5>
                        <h5 className='pb-4'>Quality Foods</h5>
                        <h5>Mixed</h5>
                    </div>

                    <div className='pt-10 md:pt-0  ps-3 md:ps-0 text-left md:text-center'>
                        <h1 className='pb-8 text-lg'>HAVE A QUESTIONS?</h1>
                        <div className='flex'>
                            <div className='pt-1'>
                                <FaMapMarkerAlt></FaMapMarkerAlt>
                            </div>
                            <div className='ps-8 md:ps-0'>
                                <h1>203 Fake St. Mountain View, San Francisco, California, USA</h1>
                            </div>
                        </div>
                        
                        <div className='flex py-5'>
                            <div className='pt-1'><FaPhoneAlt></FaPhoneAlt></div>
                            <div className='ps-7'>
                                <h1>+2 392 3929 210</h1>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='pt-1'><FaRegEnvelope></FaRegEnvelope></div>
                            <div className='ps-7'>
                                <h1>info@yourdomain.com</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;