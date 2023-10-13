

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyToy = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('../../../../public/myToysData.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const displayedData = showAll ? data : data.slice(0, 10);


    const handleUpdate = (index) => {
        const newQuantity = prompt('Enter the new quantity:'); // You can use a more sophisticated UI for input
        if (newQuantity !== null && !isNaN(newQuantity)) {
            const newData = [...data];
            newData[index].quantity = Number(newQuantity);
            setData(newData);
            toast.success("Quantity Updated", {
                autoClose: 1000,
            });
        } else {
            toast.warning("Invalid quantity input", {
                autoClose: 1000,
            });
        }
    };

    const handleDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
        toast.error("Item Deleted", {
            autoClose: 1000,
        });
    };

    return (
        <div className='custom-scrollbar'>
            <h1 className='text-3xl text-green-600 text-center my-4'>Selected Toys</h1>
            {data.length > 0 ? (
                <div>
                    <table className="w-full mt-8 border border-collapse">
                        <thead>
                            <tr>
                                <th className="sm:table-cell py-3 bg-slate-200">Picture</th>
                                <th className="sm:table-cell py-3 bg-slate-200">Name</th>
                                <th className="sm:table-cell py-3 bg-slate-200">Price</th>
                                <th className="sm:table-cell py-3 bg-slate-200">Quantity</th>
                                <th className="sm:table-cell py-3 bg-slate-200">Rating</th>
                                <th className="sm:table-cell py-3 bg-slate-200">Update</th>
                                <th className="sm:table-cell py-3 bg-slate-200">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedData.map((item, index) => (
                                <tr key={index}>
                                    <td className="border-b min-w-[100px] flex items-center justify-center">
                                        <img src={item.image} alt={item.name} className="w-28 h-28 m-2" />
                                    </td>
                                    <td className="border-b min-w-[100px] text-center">{item.name}</td>
                                    <td className="border-b min-w-[100px] text-center">{item.price}</td>
                                    <td className="border-b min-w-[100px] text-center">{item.quantity}</td>
                                    <td className="border-b min-w-[100px] text-center">{item.rating}</td>
                                    <td className="border-b min-w-[100px] text-center relative ">
                                        <button className='bg-green-600 px-3 p-1 rounded-md text-white' onClick={() => handleUpdate(index)}>Update</button>
                                    </td>
                                    <td className="border-b min-w-[100px] text-center relative ">
                                        <button className='bg-red-600 px-3 p-1 rounded-md text-white' onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="submit flex justify-center items-center text-white px-4 py-2 rounded-md mt-4"
                    >
                        {showAll ? "Show Less" : "Show All Data"}
                    </button>
                </div>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default MyToy;


