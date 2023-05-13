import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const AllOrders = () => {

    const { data: order = [], refetch } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await fetch('https://server-dun-mu.vercel.app/order');
            const data = await res.json();
            return data;
        }
    });


    const handleDetetingUser = order => {
        console.log(order);
        fetch(`https://server-dun-mu.vercel.app/order/${order._id}`, {
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
                        title: 'order Removed',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }


    return (
        <div>
            <div className='container mx-auto p-5'>
                <h1 className='text-left text-3xl font-semibold py-10'>ALL ORDERS</h1>
                <div className="overflow-x-auto pb-8 drop-shadow-2xl">
                    <table className="table w-full ">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> User Name</th>
                                <th>Email</th>
                                <th>Operation</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                order.map((order, i) =>
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td>{order.orderBy}</td>
                                        <td>{order.email}</td>
                                        <td>{order.pizzaName}</td>

                                        {/* { <td>
                                            {
                                                user?.role !== 'admin' ?
                                                    <button onClick={() => handleMakeAdmin(user._id)} style={{ backgroundColor: '#005967' }} className='btn btn-sm text-white py-0'>Make Admin</button> :
                                                    <div style={{ color: '#0ca1b7' }} className="flex items-center">
                                                        <div><FaCheckCircle></FaCheckCircle> </div>
                                                        <div className='ms-2'>Admin</div>
                                                    </div>
                                            }
                                        </td> */}


                                        <td><button onClick={() => handleDetetingUser(order)} className="btn btn-xs btn-error text-white">DELETE</button></td>
                                        
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;