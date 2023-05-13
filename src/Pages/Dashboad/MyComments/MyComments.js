import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyComments = () => {
    const { user } = useContext(AuthContext);

    const { data: comments = [], refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mycomments?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });

    const handleDetetingcomment = comment => {
        fetch(`http://localhost:5000/mycomments/${comment._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Comment Removed',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    return (
        <div>
            <div className="container mx-auto mt-4">
                {comments?.length > 0 ?
                    <h1 h1 style={{ color: '#D4A977', fontWeight: '300', letterSpacing: '2px' }} className="mb-3">My Comment - {comments.length}</h1>
                    :
                    < h1 style={{ color: '#D4A977', fontWeight: '300', letterSpacing: '2px' }} className="mb-3">No Comment Yet</h1>
                }
                {
                    comments?.length > 0 &&
                    <div className="table-responsive">
                        <table className="table table-striped border rounded  table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Blog ID</th>
                                    <th scope="col">Posted On</th>
                                    <th scope="col">Comment</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    comments?.map((comment, i) => <tr key={comment._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{comment.blogId}</td>
                                        <td>{comment.postedMonth}, {comment.postedYear}</td>
                                        <td>{comment.comment.slice(0, 70)}</td>
                                        <td><button onClick={() => handleDetetingcomment(comment)} style={{ backgroundColor: 'red' }} type="button" className="btn btn-sm text-white py-0">Delete</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div >
    );
};

export default MyComments;