import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUser = () => {

    const { data: user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/user/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successful',
                        showConfirmButton: false,
                        timer: 2200
                    })
                    refetch();
                }
            })
    }

    const handleDetetingUser = user => {
        console.log(user);
        fetch(`http://localhost:5000/user/${user._id}`, {
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
                        title: 'user Removed',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }


    return (
        <div>
            <div className='container mx-auto p-5'>
                <h1 className='text-left text-3xl font-semibold py-10'>ALL USER</h1>
                <div className="overflow-x-auto pb-8 drop-shadow-2xl">
                    <table className="table w-full ">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Operation</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                user.map((user, i) =>
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        
                                        <td>
                                            {
                                                user?.role !== 'admin' ?
                                                    <button onClick={() => handleMakeAdmin(user._id)} style={{ backgroundColor: '#005967' }} className='btn btn-sm text-white py-0'>Make Admin</button> :
                                                    <div style={{ color: '#0ca1b7' }} className="flex items-center">
                                                        <div><FaCheckCircle></FaCheckCircle> </div>
                                                        <div className='ms-2'>Admin</div>
                                                    </div>
                                            }
                                        </td>
                                        <td><button onClick={() => handleDetetingUser(user)} className="btn btn-xs btn-error text-white">DELETE</button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;