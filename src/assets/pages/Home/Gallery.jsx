import React from 'react';

import g1 from '../../images/gallery8.jpg'
import g2 from '../../images/gallery1.jpg'
import g3 from '../../images/gallery9.jpg'
import g4 from '../../images/gallery2.jpg'
import g5 from '../../images/gallery3.jpg'
import g6 from '../../images/gallery4.jpg'



const Gallery = () => {
    return (
        <div className="gallery">
            <h1 className='text-3xl font-semibold my-5 text-center text-green-600'>Toys Gallery</h1>
            <div className="grid grid-cols-3 w-full mx-auto m-3 h-4/5 " id='box-shad'>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden border-2 border-green-200">
                    <img
                        className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                        src={g1}
                        alt="Image 1"
                    />
                </div>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden border-2 border-green-200">
                    <img
                        className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                        src={g2}
                        alt="Image 1"
                    />
                </div>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden border-2 border-green-200">
                    <img
                        className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                        src={g3}
                        alt="Image 3"
                    />
                </div>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden border-2 border-green-200">
                    <img
                        className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                        src={g4}
                        alt="Image 4"
                    />
                </div>
                {/* <div className="aspect-w-1 aspect-h-1 overflow-hidden border border-gray-500">
                        <img
                            className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                            src={g5}
                            alt="Image 5"
                        />
                    </div> */}
                <div className="aspect-w-1 aspect-h-1 overflow-hidden border-2 border-green-200 col-span-1">
                    <img
                        className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                        src={g5}
                        alt="Image 6"
                    />
                </div>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden border-2 border-green-200 col-span-1">
                    <img
                        className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                        src={g6}
                        alt="Image 6"
                    />
                </div>
            </div>


        </div>
    );
};

export default Gallery;