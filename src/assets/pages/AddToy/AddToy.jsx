/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DynamicTittle from '../Hook/DynamicTittle';

const AddToy = ({ onAddToy }) => {
    DynamicTittle('Add Toy')
    const [toyData, setToyData] = useState({
        toyName: '',
        sellerName: '',
        sellerEmail: '',
        quantity: '',
        subCategory: '',
        price: '',
        photoURL: '',
        toyDetails: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setToyData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any of the required fields are empty
        const requiredFields = ['toyName', 'sellerName', 'sellerEmail', 'quantity', 'subCategory', 'price', 'photoURL', 'toyDetails'];

        for (const field of requiredFields) {
            if (!toyData[field]) {
                toast.error(`Please fill up ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} box`);
                return; // Stop form submission if any required field is empty
            }
        }

        // If all required fields are not empty, show a message
        if (requiredFields.every(field => toyData[field])) {
            toast.success('Product added successfully', {
                autoClose: 1000,
            });
        }

        // Call a function to add the toy data
        onAddToy(toyData);

        // Clear the form after successful submission
        setToyData({
            toyName: '',
            sellerName: '',
            sellerEmail: '',
            quantity: '',
            subCategory: '',
            price: '',
            photoURL: '',
            toyDetails: '',
        });


    };




    return (
        <div className='my-10'>
            <div className='flex justify-center items-center'>
                <form className='grid grid-cols-2 gap-2 gap-x-4  view-shadow  lg:w-6/12 px-5 rounded-md bg-green-50' onSubmit={handleSubmit}>
                    <div className='col-span-2 text-2xl text-center font-bold pb-3 pt-2 text-green-600'>Add A Toy</div>
                    <label className='font-semibold text-sm'>
                        <p>Toy Name*</p>
                        <input className='border-2 mt-1 border-green-600 rounded-md p-2 w-full' placeholder="Toy name" type="text" name="toyName" value={toyData.toyName} onChange={handleChange} />
                    </label>
                    <label className='font-semibold text-sm'>
                        <p>Seller Name*</p>
                        <input className='border-2 mt-1 border-green-600 rounded-md p-2 w-full' type="text" name="sellerName" value={toyData.sellerName} onChange={handleChange} />
                    </label>
                    <label className='font-semibold text-sm'>
                        <p>Seller Email*</p>
                        <input className='border-2 mt-1 border-green-600 rounded-md p-2 w-full' type="email" name="sellerEmail" value={toyData.sellerEmail} onChange={handleChange} />
                    </label>
                    <label className='font-semibold text-sm'>
                        <p>Quantity*</p>
                        <input className='border-2 mt-1 border-green-600 rounded-md p-2 w-full' type="number" name="quantity" value={toyData.quantity} onChange={handleChange} />
                    </label>

                    <label className='font-semibold text-sm'>
                        <p>Sub Category*</p>
                        <select className='border-2 mt-1 border-green-600 rounded-md p-2 w-full' name="subCategory" value={toyData.subCategory} onChange={handleChange}>
                            <option value="category1">Classic Zip</option>
                            <option value="category2">Vintage Car</option>
                            <option value="category3">Formula 1</option>
                        </select>
                    </label>

                    <label className='font-semibold text-sm'>
                        <p>Price*</p>
                        <input className='border-2 mt-1 border-green-600 rounded-md p-2 w-full' type="number" name="price" value={toyData.price} onChange={handleChange} />
                    </label>
                    <label className='col-span-2 font-semibold text-sm'>
                        <p>Photo URL*</p>
                        <input className='border-2 mt-1 border-green-600 rounded-md p-2 w-full' type="text" name="photoURL" value={toyData.photoURL} onChange={handleChange} />
                    </label>
                    <label className='col-span-2 font-semibold text-sm'>
                        <p>Toy Details*</p>
                        <textarea className='  border-2 mt-1 border-green-600 rounded-md pl-2 py-4 w-full' name="toyDetails" value={toyData.toyDetails} onChange={handleChange} />
                    </label>
                    {/* <button className='add col-span-2 w-full flex-1 self-end justify-end' type="submit">Add Toy</button> */}
                    <button className='add col-span-2 w-full flex-1 self-end justify-end' type="submit">Add Toy</button>
                </form>
            </div>
        </div>
    );
};

export default AddToy;
