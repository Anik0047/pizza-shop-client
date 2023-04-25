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
            <div className='container mx-auto my-5'>
                <h1 className='text-left text-3xl font-semibold my-5'>ALL PIZZA</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
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
            <div>


                <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=hemsen%20lane%20Chittagong+(Pizza)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

            </div>
        </div>
    );
};

export default AllPizza;