
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiArrowSmRight } from "react-icons/hi";

const ViewDetails = () => {
    const { id } = useParams();
    const [toyData, setToyData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5111/toysData/${id}`)
            .then((res) => res.json())
            .then((data) => setToyData(data))
            .catch((error) => {
                console.error('Error fetching toy data:', error);
            });
    }, [id]);

    return (
        <div className=''>
            <h1 className='text-2xl font-semibold my-5 text-green-500 text-center'>Toys Details Information</h1>
            {toyData ? (
                <div className='py-5 '>
                    <h3 className=''>{toyData.category}</h3>
                    <div className='flex flex-col sm:flex-row justify-center items-center'>
                        <div className='grid grid-cols-2 justify-center mx-auto item-center '>
                            <div className=" rounded-md col-span-2 lg:col-span-1 flex p-1 view-shadow justify-center items-center  ">
                                <img
                                    src={toyData.image}
                                    alt="Toy"
                                    // className="w-4/5 sm:w-full max-w-md rounded-lg shadow-lg"
                                    className=" w-full max-w-md rounded-lg bg-white "
                                />
                            </div>
                            <div className='mt-10 lg:mt-0 col-span-2 lg:col-span-1 w-full  text-md shadow-lg  rounded-md px-10 bg-green-50 box-shadow-carousel'>
                                <div className=" text-3xl text-green-800  text-center lg:text-start ">{toyData.name} </div>
                                <div className="py-2">Category: <span className='font-semibold'>{toyData.subCategory}</span>  </div>
                                <div className="py-2">Product Price: <span className='font-semibold'>{toyData.price}</span> </div>
                                <div className="py-2">Product Rating: <span className='font-semibold'>{toyData.rating}</span> </div>
                                <div className="py-2">Available Quantity: <span className='font-semibold'>{toyData.quantity}</span> </div>
                                <div className="py-2">Seller Name: <span className='font-semibold'>{toyData.sellerName}</span> </div>
                                {/* <div className="py-2">Seller Id: <span className='font-semibold'>{toyData.sellerID}</span> </div> */}
                                <div className="py-2">Seller Email:
                                    <span className='text-cyan-600 font-semibold'>
                                        {toyData.sellerEmail}
                                    </span> </div>
                                <div className="py-2">Seller Rating: <span className='font-semibold'>{toyData.sellerRating}</span> </div>
                                <button className=''>
                                    <label htmlFor="my-modal-3" className="p-0 sm:px-2 sm:py-2  mx-auto details px-3 text-white  hover:font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg flex justify-between items-center"> <span>Details</span>  <HiArrowSmRight className='w-5 h-5'>
                                    </HiArrowSmRight>
                                    </label>

                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <h3 className="text-lg font-bold">Selected Toys Details</h3>
                                            <img src={toyData.image} className='w-4/5 sm:w-4/6 mx-auto' alt="" />
                                            <div className='text-start mx-10 flex flex-col gap-1'>
                                                <h1 className='text-xl font-semibold mb-2 text-center'>{toyData.name}</h1>
                                                <p><b>Price:</b> {toyData.price}</p>
                                                <p><b>Quantity:</b> {toyData.quantity}</p>
                                                <p><b>Rating:</b> {toyData.rating}</p>
                                                <p><b>Seller:</b> {toyData.seller}</p>
                                                <p><b>Sub-Category:</b> {toyData.subCategory}</p>
                                                <p className='text-justify mt-2'>Congratulations on choosing the perfect toy! Get ready for endless fun and exciting adventures.</p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <table className="border-collapse border-2 border-gray-500 my-5  w-1/3 sm:w-full mx-auto">
                        <thead className='p-5 bg-green-200'>
                            <tr className=''>
                                <th className="border border-gray-500 py-2 sm:p-2">Toy Name</th>
                                <th className="hidden sm:block border border-gray-500 py-2 sm:p-2">Sub-category</th>
                                <th className="border border-gray-500 p-2">Price</th>
                                <th className="border border-gray-500 p-2">Quantity</th>
                                <th className="border border-gray-500 py-2 sm:p-2">Rating</th>
                                <th className="border border-gray-500 py-2 sm:p-2">Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-500 py-2 sm:p-2">{toyData.name}</td>
                                <td className="hidden sm:block border border-gray-500 py-2 sm:p-2">{toyData.subCategory}</td>
                                <td className="border border-gray-500 py-2 sm:p-2">{toyData.price}</td>
                                <td className="border border-gray-500 py-2 sm:p-2">{toyData.quantity}</td>
                                <td className="border border-gray-500 py-2 sm:p-2">{toyData.rating}</td>
                                <td className="border border-gray-500 py-2 sm:p-2">
                                    <label htmlFor="my-modal-3" className="p-0 sm:px-2 sm:py-2 text-black mx-auto submit  hover:font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg text-xs">Details</label>

                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <h3 className="text-lg font-bold">Selected Toys Details</h3>
                                            <img src={toyData.image} className='w-4/5 sm:w-4/6 mx-auto' alt="" />
                                            <div className='text-start mx-10 flex flex-col gap-1'>
                                                <h1 className='text-xl font-semibold mb-2 text-center'>{toyData.name}</h1>
                                                <p><b>Price:</b> {toyData.price}</p>
                                                <p><b>Quantity:</b> {toyData.quantity}</p>
                                                <p><b>Rating:</b> {toyData.rating}</p>
                                                <p><b>Seller:</b> {toyData.seller}</p>
                                                <p><b>Sub-Category:</b> {toyData.subCategory}</p>
                                                <p className='text-justify mt-2'>Congratulations on choosing the perfect toy! Get ready for endless fun and exciting adventures.</p>
                                            </div>
                                        </div>
                                    </div></td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            ) : (
                <div>
                    ...
                </div>
            )}


        </div>
    );
};

export default ViewDetails;

