import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const AllBolg = () => {
    const { data: blog = [], refetch } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await fetch('https://server-dun-mu.vercel.app/blog');
            const data = await res.json();
            return data;
        }
    });
    
    const handleDetetingUser = blog => {
        console.log(blog);
        fetch(`https://server-dun-mu.vercel.app/blog/${blog._id}`, {
            method: 'DELETE',
            headers: {}
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'blog Removed',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    return (
        <div>
            <div className='container mx-auto my-5 p-5'>
                <h1 className='text-left text-3xl font-semibold my-5'>ALL BLOG</h1>
                <div className="overflow-x-auto pb-8 drop-shadow-2xl">
                    <table className="table w-full">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th>Operation</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                blog.map((blog, i) =>
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td>{blog.name}</td>
                                        <td>{blog.description.slice(0, 50)}</td>
                                        <td>{blog.date}</td>
                                        <td><button onClick={() => handleDetetingUser(blog)} className="btn btn-xs btn-error text-white">DELETE</button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default AllBolg;