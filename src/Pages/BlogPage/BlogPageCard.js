import React from 'react';

const BlogPageCard = ({blog}) => {
    const { name, description, image, date } = blog;

    return (
        <div className='py-10'>
            <img className='' src={image} alt=''></img>
            <p className='text-left px-5 md:px-0 py-5 text-stone-500'>{date}</p>
            <h1 className='text-left text-2xl font-semibold pb-5 px-5 md:px-0 text-white'>{name}</h1>
            <p className='text-start text-stone-500 px-5 md:px-0'>{description.slice(0, 200)}...</p>
        </div>
    );
};

export default BlogPageCard;