import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

import ms1 from '../assets/ms1.jpg';
import ms2 from '../assets/ms2.jpg';
import ms3 from '../assets/ms3.jpg';
import ms4 from '../assets/ms4.jpg';
import ms5 from '../assets/ms5.jpg';
import ms6 from '../assets/ms6.jpg';

import './css/custom.css'
import { Link } from 'react-router-dom';

const CourseHighlight = () => {
    return (
        <div className="container courseHighlights">
            <h1 className="heading font-bold">Our Popular Courses</h1>
            <p className="text-center mb-10">Explore our top-rated courses, designed to ignite your curiosity and accelerate your learning journey. Dive into a world of knowledge with our selection of popular courses handpicked for your success.</p>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}

                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    effect: "fade"
                }}

                pagination={{ el: '.swiper-pagination', clickable: true }}

                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}

                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <div className='bg-teal-700 rounded-3xl -z-10 border border-blue-950'>
                        <div className='pt-7'>
                            <img src={ms1} className='w-[340px] h-[340px] rounded-3xl mx-auto' alt="slide_image" />
                        </div>
                        <div className='p-7'>
                            <h1 className='text-3xl font-bold text-teal-300'>Course: Introduction to Data Science</h1>

                            <h3 className='text-xl mt-2 text-stone-400 font-semibold'>Instructor: Adam Stone</h3>

                            <h3 className='text-white text-base mt-2'>Description: Dive into the fundamentals of data science, learning key concepts, tools, and techniques for data analysis and visualization.</h3>

                            <div className='flex'>
                                <h3 className='text-lg mr-4 mt-3 text-amber-200 font-semibold'>Rating: <span>★ ★ ★ ★ ☆</span></h3>

                                <h3 className='text-lg mt-3 text-amber-200 font-semibold'>Enrolled by: <span>12,343</span></h3>
                            </div>

                            <div className='flex items-center'>
                                <h4 className='text-2xl mt-3 text-teal-300 font-bold mr-4'>Price: $49.99</h4>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allClasses'>Enroll Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-teal-700 rounded-3xl -z-10 border border-blue-950'>
                        <div className='pt-7'>
                            <img src={ms2} className='w-[340px] h-[340px] rounded-3xl mx-auto' alt="slide_image" />
                        </div>
                        <div className='p-7'>
                            <h1 className='text-3xl font-bold text-teal-300'>Course: Mastering Python Programming</h1>

                            <h3 className='text-xl mt-2 text-stone-400 font-semibold'>Instructor: Ren Flower</h3>

                            <h3 className='text-white text-base mt-2'>Description: Unlock the power of Python programming with comprehensive lessons covering syntax, data structures.</h3>

                            <div className='flex'>
                                <h3 className='text-lg mr-4 mt-3 text-amber-200 font-semibold'>Rating: <span>★ ★ ★ ★ ★</span></h3>

                                <h3 className='text-lg mt-3 text-amber-200 font-semibold'>Enrolled by: <span>5,400</span></h3>
                            </div>

                            <div className='flex items-center'>
                                <h4 className='text-2xl mt-3 text-teal-300 font-bold mr-4'>Price: $39.99</h4>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allClasses'>Enroll Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-teal-700 rounded-3xl -z-10 border border-blue-950'>
                        <div className='pt-7'>
                            <img src={ms3} className='w-[340px] h-[340px] rounded-3xl mx-auto' alt="slide_image" />
                        </div>
                        <div className='p-7'>
                            <h1 className='text-3xl font-bold text-teal-300'>Course: Digital Marketing Essentials</h1>

                            <h3 className='text-xl mt-2 text-stone-400 font-semibold'>Instructor: Tom Latham</h3>

                            <h3 className='text-white text-base mt-2'>Description: Gain essential skills in digital marketing, including SEO, social media marketing and analytics, to boost your online presence.</h3>

                            <div className='flex'>
                                <h3 className='text-lg mr-4 mt-3 text-amber-200 font-semibold'>Rating: <span>★ ★ ★ ☆ ☆</span></h3>

                                <h3 className='text-lg mt-3 text-amber-200 font-semibold'>Enrolled by: <span>18,343</span></h3>
                            </div>

                            <div className='flex items-center'>
                                <h4 className='text-2xl mt-3 text-teal-300 font-bold mr-4'>Price: $69.99</h4>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allClasses'>Enroll Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-teal-700 rounded-3xl -z-10 border border-blue-950'>
                        <div className='pt-7'>
                            <img src={ms4} className='w-[340px] h-[340px] rounded-3xl mx-auto' alt="slide_image" />
                        </div>
                        <div className='p-7'>
                            <h1 className='text-3xl font-bold text-teal-300'>Course: Web Development Bootcamp</h1>

                            <h3 className='text-xl mt-2 text-stone-400 font-semibold'>Instructor: Sean Williams</h3>

                            <h3 className='text-white text-base mt-2'>Description: earn the essentials of web development, including HTML, CSS, JavaScript to create dynamic and interactive websites.</h3>

                            <div className='flex'>
                                <h3 className='text-lg mr-4 mt-3 text-amber-200 font-semibold'>Rating: <span>★ ★ ★ ★ ☆</span></h3>

                                <h3 className='text-lg mt-3 text-amber-200 font-semibold'>Enrolled by: <span>32,343</span></h3>
                            </div>

                            <div className='flex items-center'>
                                <h4 className='text-2xl mt-3 text-teal-300 font-bold mr-4'>Price: $89.99</h4>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allClasses'>Enroll Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-teal-700 rounded-3xl -z-10 border border-blue-950'>
                        <div className='pt-7'>
                            <img src={ms5} className='w-[340px] h-[340px] rounded-3xl mx-auto' alt="slide_image" />
                        </div>
                        <div className='p-7'>
                            <h1 className='text-3xl font-bold text-teal-300'>Course: Introduction to Artificial Intelligence</h1>

                            <h3 className='text-xl mt-2 text-stone-400 font-semibold'>Instructor: Railee Star</h3>

                            <h3 className='text-white text-base mt-2'>Description:  Explore the exciting field of artificial intelligence, covering machine learning, neural networks, nlp and AI applications.</h3>

                            <div className='flex'>
                                <h3 className='text-lg mr-4 mt-3 text-amber-200 font-semibold'>Rating: <span>★ ★ ★ ★ ☆</span></h3>

                                <h3 className='text-lg mt-3 text-amber-200 font-semibold'>Enrolled by: <span>10,343</span></h3>
                            </div>

                            <div className='flex items-center'>
                                <h4 className='text-2xl mt-3 text-teal-300 font-bold mr-4'>Price: $19.99</h4>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allClasses'>Enroll Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-teal-700 rounded-3xl -z-10 border border-blue-950'>
                        <div className='pt-7'>
                            <img src={ms6} className='w-[340px] h-[340px] rounded-3xl mx-auto' alt="slide_image" />
                        </div>
                        <div className='p-7'>
                            <h1 className='text-3xl font-bold text-teal-300'>Course: Business Management Fundamentals</h1>

                            <h3 className='text-xl mt-2 text-stone-400 font-semibold'>Instructor: Adam Denver</h3>

                            <h3 className='text-white text-base mt-2'>Description: Master the principles of business management, strategic planning, organizational behavior, finance, and leadership skills.</h3>

                            <div className='flex'>
                                <h3 className='text-lg mr-4 mt-3 text-amber-200 font-semibold'>Rating: <span>★ ★ ★ ★ ☆</span></h3>

                                <h3 className='text-lg mt-3 text-amber-200 font-semibold'>Enrolled by: <span>34,343</span></h3>
                            </div>

                            <div className='flex items-center'>
                                <h4 className='text-2xl mt-3 text-teal-300 font-bold mr-4'>Price: $59.99</h4>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allClasses'>Enroll Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow text-black">
                        <IoIosArrowDropleftCircle />
                    </div>
                    <div className="swiper-button-next slider-arrow text-black">
                        <IoIosArrowDroprightCircle />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>

        </div>
    );
};

export default CourseHighlight;