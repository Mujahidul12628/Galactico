/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import './Home.css'
import { AiFillStar } from "react-icons/ai";


const Product = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = () => {
        toast.success("Hello World!");
    };

    const handleTabChange = (index) => {
        setActiveTab(index === activeTab ? -1 : index);
    };


    const [tabData, setTabData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5111/toysData")
            .then(response => response.json())
            .then(data => setTabData(data))
            .catch(error => console.error('Error fetching JSON data:', error));
    }, []);
    return (
        <div>
            <h1 className='text-3xl font-semibold my-5 text-center text-green-600'>Product</h1>

            <div className="container mx-auto p-4">
                <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
                    <TabList className="flex  max-w-fit mb-8 p-2 shadow-xl rounded-md">
                        {tabData.map((tab, index) => (
                            <Tab
                                key={index}
                                className={`mr-2 px-4 py-2 border border-slate-600 ${activeTab === index ? 'bg-green-500 text-white' : 'bg-gray-200'
                                    } rounded-md cursor-pointer`}
                                onClick={() => handleTabChange(index)}
                            >
                                {tab.category}
                            </Tab>
                        ))}
                    </TabList>

                    {tabData.map((tab, index) => (
                        <TabPanel key={index}>
                            {activeTab === index && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-sm">
                                    {tab.vehicles.map((vehicle, vIndex) => (
                                        <div
                                            key={vIndex}
                                            className="card card-compact bg-base-100 box-shadow-carousel "
                                        >
                                            {/* <figure>
                                                <img
                                                    src={vehicle.image}
                                                    alt={vehicle.name}
                                                    className="w-6/5 h-56 md:w-80 md:h-64 "
                                                // className="w-11/12"
                                                />
                                            </figure>
                                            <div className="card-body ">
                                                <h2 className="text-center text-2xl font-semibold">{vehicle.name}</h2>
                                                <p className='text-center'>Price: {vehicle.price}</p>
                                                <p className='text-center'>Rating: {vehicle.rating}</p>


                                                <div className='flex items-center justify-around'>
                                                    <div className="card-actions justify-start">
                                                        <button className=" mx-auto submit">
                                                            Buy Now
                                                        </button>
                                                    </div>

                                                    <Link to={`/toysData/${vehicle?.id}`}>
                                                        <button className="mt-3 px-6 py-3 submit text-white hover:font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg">
                                                            View Details
                                                        </button>
                                                    </Link>
                                                </div>

                                            </div> */}

                                            <div className="card w-96 bg-base-100">
                                                <img
                                                    src={vehicle.image}
                                                    alt={vehicle.name}
                                                    className="w-5/6 h-56 mx-auto md:w-72 md:h-60 "
                                                />
                                                <div className="card-body">
                                                    <h2 className="card-title">
                                                        <span className='text-2xl'>{vehicle.name}</span>
                                                        <div className="badge bg-slate-400 text-white rounded-full px-1 font-thin ">New Arival</div>
                                                    </h2>
                                                    <p className='text-start text-green-600 text-xl font-semibold'>Price: {vehicle.price}</p>
                                                    <div className='flex justify-start items-center text-xl text-tart text-amber-500'>
                                                        <AiFillStar></AiFillStar>
                                                        <AiFillStar></AiFillStar>
                                                        <AiFillStar></AiFillStar>
                                                        <AiFillStar></AiFillStar>
                                                        <AiFillStar></AiFillStar>
                                                    </div>

                                                    <div className="card-actions justify-end">
                                                        <button className=" px-2 py-1 rounded-sm transition duration-300 ease-in-out transform hover:-translate-y-1 border text-green-600 border-green-500 hover:bg-green-400 hover:text-white ">
                                                            Buy Now
                                                        </button>
                                                        <Link to={`/toysData/${vehicle?.id}`}>
                                                            <button className="details px-2 py-1 rounded-sm border border-green-400 text-white hover:font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg">
                                                                View Details
                                                            </button>
                                                        </Link>
                                                        {/* <div className=" ">Fashion</div>
                                                        <div className="badge badge-outline">Products</div> */}
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    ))}
                                </div>
                            )}
                        </TabPanel>
                    ))}
                </Tabs>
            </div>

        </div>
    );
};

export default Product;