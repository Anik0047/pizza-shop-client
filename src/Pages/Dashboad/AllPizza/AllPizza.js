import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllPizza = () => {

    const { data: pizza = [], refetch } = useQuery({
        queryKey: ['pizza'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/pizza');
            const data = await res.json();
            return data;
        }
    });

    const handleDetetingUser = pizza => {
        console.log(pizza);
        fetch(`http://localhost:5000/pizza/${pizza._id}`, {
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
                        title: 'Pizza Removed',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    return (
        <div>
            <div className='container mx-auto py-5'>
                <h1 className='text-left text-3xl font-semibold py-10'>ALL PIZZA</h1>
                <div className="overflow-x-auto pb-8 drop-shadow-2xl">
                    <table className="table w-full ">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Operation</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                pizza.map((pizza, i) =>
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td>{pizza.name}</td>
                                        <td>{pizza.description.slice(0, 50)}</td>
                                        <td>$ {pizza.price}</td>
                                        <td><button onClick={() => handleDetetingUser(pizza)} className="btn btn-xs btn-error text-white">DELETE</button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllPizza;