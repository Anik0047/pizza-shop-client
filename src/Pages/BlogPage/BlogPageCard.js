import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiChat1 } from "react-icons/ci";

const BlogPageCard = ({blog}) => {
    const { name, description, image, date } = blog;

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://server-dun-mu.vercel.app/comments')
            .then(res => res.json())
            .then(data => setComments(data));
    }, [])

    const commentCount = (comments.filter(s => s.blogId === blog._id).length);
    // console.log(commentCount);

    return (
        <div className='py-10 px-5'>
            <img className='' src={image} alt=''></img>
            <p className='text-left px-5 md:px-0 py-5 text-stone-500 flex'>{date} <span className='flex text-amber-500'> <CiChat1 className='mt-1 ms-5 me-2'></CiChat1> {commentCount} </span></p>
            <h1 className='text-left text-2xl font-semibold pb-5 px-5 md:px-0 text-white'>{name}</h1>
            <p className='text-start text-stone-500 px-5 md:px-0'>{description.slice(0, 200)}... <Link to={`/blog/${blog._id}`}><button className='text-amber-500'>Read more</button></Link></p>
        </div>
    );
};

export default BlogPageCard;