/* eslint-disable react/no-unknown-property */
import React from 'react';
import './Home.css'


const BestSelling = () => {
    return (
        <div className="">
            <h1 className='text-3xl font-semibold my-5 text-center text-green-600'>Best selling product</h1>
            <div className="container w-full mx-auto ">
                <div
                    className="item-bg bg-opacity-5  rounded-lg carousel carousel-center" id='box-shad'
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                    transitionTime={500}
                    interval={3000}
                    showStatus={false}
                    swipeable
                    emulateTouch
                    showArrows
                    renderIndicator={() => null}
                >
                    <div className="w-full p-1 border rounded-lg carousel-item  lg:w-1/4" >
                        <img
                            src="https://i.ibb.co/HHRQj23/vintage8.jpg"
                            alt="zip"
                            className="carousel-image w-50"
                        />
                    </div>
                    <div className="w-full p-1 border rounded-lg carousel-item border-green-100 lg:w-1/4">
                        <img
                            src="https://i.ibb.co/JHTRznb/formula3.jpg"
                            alt="Pizza"
                            className="carousel-image w-50"
                        />
                    </div>
                    <div className="w-full p-1 border rounded-lg carousel-item border-green-100 lg:w-1/4">
                        <img
                            src="https://i.ibb.co/Mf2LzM9/vintage.jpg"
                            alt="Pizza"
                            className="carousel-image w-50"
                        />
                    </div>
                    <div className="w-full p-1 border rounded-lg carousel-item border-green-100 lg:w-1/4">
                        <img
                            src="https://i.ibb.co/k4QYCcY/zip5.jpg"
                            alt="Pizza"
                            className="carousel-image w-50"
                        />
                    </div>
                    <div className="w-full p-1 border rounded-lg carousel-item border-green-100 lg:w-1/4">
                        <img
                            src="https://i.ibb.co/yQFh0jC/vintage1.jpg"
                            alt="Pizza"
                            className="carousel-image w-50"
                        />
                    </div>
                    <div className="w-full p-1 border rounded-lg carousel-item border-green-100 lg:w-1/4">
                        <img
                            src="https://i.ibb.co/HDPXVzL/formula7.jpg"
                            alt="Pizza"
                            className="carousel-image w-50"
                        />
                    </div>
                    <div className="w-full p-1 border rounded-lg carousel-item border-green-100 lg:w-1/4">
                        <img
                            src="https://i.ibb.co/Yh9DVBP/vintage4.jpg"
                            alt="Pizza"
                            className="carousel-image w-50"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BestSelling;