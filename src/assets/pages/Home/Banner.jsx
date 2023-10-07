import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative rounded-b flex flex-col items-center justify-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/Dtx01dk/car.jpg')]">
                        <div className="absolute w-full h-full bg-black opacity-30"></div>
                        <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
                            <h2 className="text-3xl font-bold text-white sm:text-3xl ">
                                <span className=''>Explore, Experience, Excel</span>
                            </h2>
                            <p className="w-9/12 mx-auto mt-5 text-justify text-md text-slate-300 sm:text-lg">
                                Explore a symphony of wheels, your dream car awaits for you. Unleash the thrill for you at our curated haven for automotive car collection enthusiasts.
                            </p>
                            <div className='flex items-center justify-center'>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white border-2 border-yellow-500 rounded-md shadow hover:bg-yellow-500 shadow-yellow-500"
                                >
                                    Buy Now
                                </button>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white bg-yellow-500 border-2 border-yellow-500 rounded-md shadow-lg hover:bg-transparent hover:border-2"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative rounded-b flex flex-col items-center justify-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/RTHv1xH/car2.jpg')]">
                        <div className="absolute w-full h-full bg-black opacity-30"></div>
                        <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
                            <h2 className="text-3xl font-bold text-white sm:text-3xl ">
                                <span className=''>Elevate Your Car Experience </span>
                            </h2>
                            <p className="w-9/12 mx-auto mt-5 text-justify text-md text-slate-300 sm:text-lg">
                                Explore the wheel symphony, discover your dream car. Unleash excitement at our curated haven, designed for true automotive aficionados.
                            </p>
                            <div className='flex items-center justify-center'>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white border-2 border-yellow-500 rounded-md shadow hover:bg-yellow-500 shadow-yellow-500"
                                >
                                    Buy Now
                                </button>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white bg-yellow-500 border-2 border-yellow-500 rounded-md shadow-lg hover:bg-transparent hover:border-2"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative rounded-b flex flex-col items-center justify-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/CJcQRb7/car3.jpg')]">
                        <div className="absolute w-full h-full bg-black opacity-30"></div>
                        <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
                            <h2 className="text-3xl font-bold text-white sm:text-3xl ">
                                <span className=''></span>  Ultimate Car Destination
                            </h2>
                            <p className="w-9/12 mx-auto mt-5 text-justify text-md text-slate-300 sm:text-lg">
                                Embark on the wheel symphony; uncover your dream car. Unleash excitement at our curated haven, a playground for automotive enthusiasts.
                            </p>
                            <div className='flex items-center justify-center'>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white border-2 border-yellow-500 rounded-md shadow hover:bg-yellow-500 shadow-yellow-500"
                                >
                                    Buy Now
                                </button>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white bg-yellow-500 border-2 border-yellow-500 rounded-md shadow-lg hover:bg-transparent hover:border-2"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>





            </Swiper>
        </div>
    );
};

export default Banner;