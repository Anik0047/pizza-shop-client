import { useQuery } from '@tanstack/react-query';
import React from 'react';
import '../Pizza/Pizza.css'
import BlogCard from './BlogCard';

const Blog = () => {

    const { data: blog = [], refetch } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blog');
            const data = await res.json();
            return data.slice(0,3);
        }
    });


    return (
        <div className='pizzaBackground py-28'>
            <div className='container mx-auto'>
                <h1 className='text-white text-3xl font-semibold pb-10'>RECENT FROM BLOG</h1>
                <p className='text-stone-500 pb-16 px-10'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className='grid md:grid-cols-3 gap-8'>
                    {
                        
                        blog.map(blog => <BlogCard
                            blog={blog}
                            key={blog._id}
                        ></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;