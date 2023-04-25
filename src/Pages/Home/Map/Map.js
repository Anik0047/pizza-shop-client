import React from 'react';

const Map = () => {
    return (
        <div className='grid md:grid-cols-2 text-white'>
            <div className='order-2 md:order-1'> <iframe className='w-full h-full' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=hemsen%20lane%20Chittagong+(Pizza)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
            <div className='bg-black py-10 order-1 md:order-2'>
                <h1 className=' text-2xl'>Contact Us</h1>
                <div>
                    <input type="text" placeholder="First Name" className="input w-1/2 border border-0 border-b-4 border-indigo-500 bg-black e my-8" />
                </div>
                <div>
                    <input type="text" placeholder="Last Name" className="input w-1/2 border border-0 border-b-4 border-indigo-500 bg-black" />
                </div>
                <div>
                    <input type="text" placeholder="Message" className="input w-1/2 border border-0 border-b-4 border-indigo-500 bg-black my-8" />
                </div>
                <button className="btn btn-warning rounded-none btn-outline">Send</button>
            </div>
        </div>
    );
};

export default Map;