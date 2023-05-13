import React from 'react';
import img from '../../../images/about.jpg';
import './Welcome.css';

const Welcome = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className='w-auto h-auto'>
                    <img src={img} alt=''></img>
                </div>
                <div className='bg text-white flex justify-center items-center text-left px-8'>
                    <div className=' container mx-auto py-7 text-center md:text-left'>
                        <h2 className='text-4xl mb-10'>Welcome to <span className="text-amber-500">Pizza</span> A Restaurant</h2>
                        <p className='text-sm text-gray-300 text-justify'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would
                            have been rewritten a thousand times and everything that was left from its origin would be the word
                            "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing
                            the copy said could convince her and so it didn’t take long until a few insidious Copy Writers
                            ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they
                            abused her for their.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;