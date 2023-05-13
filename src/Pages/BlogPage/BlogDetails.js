import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { CiChat1 } from "react-icons/ci";
import { AuthContext } from '../../Content/AuthProvider';
import Swal from 'sweetalert2';
import ShowComment from './ShowComment';

const BlogDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const formBlogs = useLoaderData();
    const blog = (formBlogs[0]);
    console.log(blog);
    const navigate = useNavigate();
    
    const { user } = useContext(AuthContext);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const comment = useRef();

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://server-dun-mu.vercel.app/comments')
            .then(res => res.json())
            .then(data => setComments(data));
    }, [])

    const commentCount = comments.filter(cC => cC.blogId === blog._id).length;

    const handleCommentPost = e => {
        const commentData = {
            userName: user.displayName,
            userEmail: user.email,
            blogId: blog._id,
            comment: comment.current.value,
            postedMonth: months[new Date().getMonth()],
            postedYear: new Date().getFullYear()
        }
        fetch('https://server-dun-mu.vercel.app/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Comment Posted',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    e.target.reset();
                }
            })
            navigate('/blog');
            e.preventDefault();

    }
    return (
        <div className="pizzaBackground text-white py-8">
            <div>
                <div className="container mx-auto">
                    <div className='text-center text-xl font-bold pb-5'>{blog.name}</div>

                    <div className="flex justify-center text-amber-500">{blog.date} / by Pizza Team / <span className='flex ps-2'> <CiChat1 className='text-lg mt-1 me-1'></CiChat1>     {commentCount}</span> </div>
                </div>
            </div>
            <div className='container mx-auto p-5 pb-0'>
                <div className='text-justify px-5'>{blog.description}</div>
                <div className=''>“</div>
                <div className=''>{blog.quote}</div>
                <hr />
            </div>
            <div className='mb-5'>
                <div className='container mx-auto px-5 mb-5'>
                    {
                        commentCount > 0 &&
                        <h1>{commentCount} comments</h1>
                    }
                    <hr />
                </div>
                {
                    comments.filter(comment => comment.blogId === blog._id)
                        .map(showComment =>
                            <ShowComment
                                key={showComment._id}
                                showComment={showComment}>
                            </ShowComment>)
                }
            </div>
            <div className='container mx-auto blogDetailsComment px-5'>
                <h4>Leave a Reply</h4>
                <h5>Your email address will not be published. Required fields are marked *</h5>
                <h5>Comment *</h5>
                <form onSubmit={handleCommentPost}>
                    <textarea className='bg border border-amber-500 my-5 w-3/4 h-28 p-2' name="comment" ref={comment} id="comment" ></textarea> <br />
                    <button type="submit" className='btn btn-warning rounded-none btn-outline mt-4'>Post Comment</button>
                </form>
            </div>
        </div>
    );
};

export default BlogDetails;