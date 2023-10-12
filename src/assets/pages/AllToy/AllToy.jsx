

import React, { useEffect, useState } from 'react';

const AllToy = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5111/all')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const displayedData = showAll ? data : data.slice(0, 10);

    return (
        <div className=' custom-scrollbar'>
            <h1>Toys Table</h1>
            {data.length > 0 ? (
                <div>
                    <table className="w-full mt-8 border border-collapse">
                        <thead>
                            <tr className=''>
                                <th className="sm:table-cell border border-slate-400 py-3 bg-slate-200 ">Picture</th>
                                <th className="sm:table-cell border border-slate-400 py-3 bg-slate-200 min-w-[100px]">Name</th>
                                <th className="sm:table-cell border border-slate-400 py-3 bg-slate-200 ">Price</th>
                                <th className="sm:table-cell border border-slate-400 py-3 bg-slate-200 ">Rating</th>
                                <th className="sm:table-cell border border-slate-400 py-3 bg-slate-200 ">Quantity</th>
                                <th className="sm:table-cell border border-slate-400 py-3 bg-slate-200 ">Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {displayedData.map((item, index) => (
                                <tr key={index}>
                                    <td className="border-t border-b min-w-[100px] flex items-center justify-around">
                                        <span className=''>{index + 1}</span>  <img src={item.image} alt={item.name} className="w-20 h-20 m-2" />
                                    </td>
                                    <td className="border min-w-[100px] text-center">{item.name}</td>
                                    <td className="border min-w-[100px] text-center">{item.price}</td>
                                    <td className="border min-w-[100px] text-center">{item.rating}</td>
                                    <td className="border min-w-[100px] text-center">{item.quantity}</td>
                                    <td className="border min-w-[100px] text-center relative">
                                        <label htmlFor={`my-modal-${index}`} className=" sm:px-3 sm:py-2 text-white  mx-auto details font-semibold rounded-md hover:border-2 hover:border-green-500 transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg text-xs">
                                            View Details
                                        </label>

                                        <input type="checkbox" id={`my-modal-${index}`} className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box relative">
                                                <label htmlFor={`my-modal-${index}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                <h3 className="text-lg font-bold">Selected Toys Details</h3>
                                                <img src={item.image} className='w-4/5 sm:w-4/6 mx-auto' alt="" />
                                                <div className='text-start mx-10 flex flex-col gap-1'>
                                                    <h1 className='text-2xl font-semibold my-2 text-center text-green-600'>{item.name}</h1>
                                                    <p><b>Sub-Category:</b> {item.subCategory}</p>
                                                    <p><b>Product Price:</b> {item.price}</p>
                                                    <p><b>Product Stock:</b> {item.quantity}</p>
                                                    <p><b>Seller Id:</b> {item.sellerID}</p>
                                                    <p><b>Seller Name:</b> {item.sellerName}</p>
                                                    <p><b>Seller Email:</b> {item.sellerEmail}</p>
                                                    <p><b>Seller Rating:</b> {item.sellerRating}</p>

                                                    <p className='text-justify mt-2'>Congratulations on choosing the perfect toy! Get ready for endless fun and exciting adventures.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="submit flex justify-center items-center  text-white px-4 py-2 rounded-md mt-4"
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

export default AllToy;

