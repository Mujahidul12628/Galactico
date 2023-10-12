import React from 'react';
import offer1 from '../../images/collection_s3.jpg'
import offer2 from '../../images/collection_s.jpg'
import offer3 from '../../images/collection_s2.jpg'
import offer4 from '../../images/collection_s1.jpg'


const Offer = () => {
    return (
        <div className=' bg-slate-50 py-10'>
            <h1 className='text-3xl text-green-600 text-center my-5 font-semibold'>Toys Offer Price</h1>
            <div className='flex p-1 justify-center items-center '>
                <div>
                    <img className=' shadow-lg w-9/12 mx-auto' src={offer1} alt="offer1" />
                </div>
                <div>
                    <img className=' shadow-lg w-9/12 mx-auto' src={offer2} alt="offer3" />
                </div>
                <div>
                    <img className=' shadow-lg w-9/12 mx-auto' src={offer3} alt="offer2" />
                </div>
                <div>
                    <img className=' shadow-lg w-9/12 mx-auto' src={offer4} alt="offer4" />
                </div>

            </div>
        </div>
    );
};

export default Offer;