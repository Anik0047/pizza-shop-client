import React from 'react';
import img1 from '../../../images/gallery-1.jpg';
import img2 from '../../../images/gallery-2.jpg';
import img3 from '../../../images/gallery-3.jpg';
import img4 from '../../../images/gallery-4.jpg';

const Picture = () => {
    return (
        <div className='grid md:grid-cols-4'>
            <img src={img1} alt=''></img>
            <img src={img2} alt=''></img>
            <img className='h-full' src={img3} alt=''></img>
            <img className='h-full' src={img4} alt=''></img>
        </div>
    );
};

export default Picture;