import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BlogPageCard from './BlogPageCard';
import '../Home/Banner/Banner.css';

const BlogPage = () => {
    const { data: blog = [], refetch } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blog');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <div className='w-full h-screen text-5xl tracking-wide text-white img flex justify-center items-center px-6 md:px-0'>
                <div className='container mx-auto'>
                    <h6 className='italic font-serif text-amber-500 text'>Read Our Blog</h6>
                </div>
            </div>

            <div className='pizzaBackground py-28'>
                <div className='container mx-auto'>
                    <h1 className='text-white text-3xl font-semibold pb-10'>Read Our BLOG</h1>
                    <p className='text-stone-500 pb-16 px-10'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {
                            blog.map(blog => <BlogPageCard
                                blog={blog}
                                key={blog._id}
                            ></BlogPageCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;