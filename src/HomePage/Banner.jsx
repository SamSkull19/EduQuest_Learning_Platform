import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ms1 from '../assets/ms1.jpg';
import ms2 from '../assets/ms2.jpg';
import ms3 from '../assets/ms3.jpg';
import ms4 from '../assets/ms4.jpg';
import ms5 from '../assets/ms5.jpg';
import ms6 from '../assets/ms6.jpg';

import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='roboto'>

            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                effect: "fade"
            }}

            >
                <SwiperSlide>
                    <div className="w-full h-[550px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center">

                        <img src={ms1} className="w-full h-[550px] md:h-[500px] rounded-2xl" />

                        <div className='w-full h-[550px] md:h-[500px] bg-[#244034] bg-opacity-65 p-8 rounded-2xl absolute z-20 flex flex-col md:flex-row justify-between items-center px-10 lg:px-28'>
                            <div className='w-[330px] lg:w-[400px] mb-10 lg:mb-0'>
                                <h2 className='text-2xl md:text-4xl font-bold text-teal-300 mb-5'>
                                    Interactive Learning Modules
                                </h2>
                                <p className='text-lg font-medium text-white'>It includes video lectures, quizzes, interactive simulations, and multimedia presentations. These modules aim to engage students actively, making learning more dynamic and effective.</p>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allJobs'>Enroll Now !</Link></button>
                            </div>
                            <div className='w-[330px] lg:w-[400px]'>
                                <img src={ms6} alt=".." className='w-[330px] lg:w-[400px] rounded-2xl' />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[550px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center">

                        <img src={ms2} className="w-full h-[550px] md:h-[500px] rounded-2xl" />

                        <div className='w-full h-[550px] md:h-[500px] bg-[#244034] bg-opacity-65 p-8 rounded-2xl absolute z-20 flex flex-col md:flex-row justify-between items-center px-10 lg:px-28'>
                            <div className='w-[330px] lg:w-[400px] mb-10 lg:mb-0'>
                                <h2 className='text-2xl md:text-4xl font-bold text-teal-300 mb-5'>
                                    Personalized Learning Paths
                                </h2>
                                <p className='text-lg font-medium text-white'>The platform can tailor the learning experience based on the students pace, preferences, and performance. This includes adaptive learning technologies that adjust the difficulty level and suggest resources based on individual progress.</p>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allJobs'>Enroll Now !</Link></button>
                            </div>
                            <div className='w-[330px] lg:w-[400px]'>
                                <img src={ms5} alt=".." className='w-[330px] lg:w-[400px] rounded-2xl' />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[550px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center">

                        <img src={ms3} className="w-full h-[550px] md:h-[500px] rounded-2xl" />

                        <div className='w-full h-[550px] md:h-[500px] bg-[#244034] bg-opacity-65 p-8 rounded-2xl absolute z-20 flex flex-col md:flex-row justify-between items-center px-10 lg:px-28'>
                            <div className='w-[330px] lg:w-[400px] mb-10 lg:mb-0'>
                                <h2 className='text-2xl md:text-4xl font-bold text-teal-300 mb-5'>
                                Collaborative Tools
                                </h2>
                                <p className='text-lg font-medium text-white'>Features such as discussion forums, group projects, peer reviews, and real-time chat functionalities. These tools foster communication and collaboration among students and instructors, enhancing the learning community.</p>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allJobs'>Enroll Now !</Link></button>
                            </div>
                            <div className='w-[330px] lg:w-[400px]'>
                                <img src={ms4} alt=".." className='w-[330px] lg:w-[400px] rounded-2xl' />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[550px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center">

                        <img src={ms4} className="w-full h-[550px] md:h-[500px] rounded-2xl" />

                        <div className='w-full h-[550px] md:h-[500px] bg-[#244034] bg-opacity-65 p-8 rounded-2xl absolute z-20 flex flex-col md:flex-row justify-between items-center px-10 lg:px-28'>
                            <div className='w-[330px] lg:w-[400px] mb-10 lg:mb-0'>
                                <h2 className='text-2xl md:text-4xl font-bold text-teal-300 mb-5'>
                                Assessment and Feedback
                                </h2>
                                <p className='text-lg font-medium text-white'>A variety of assessment tools like quizzes, assignments, and exams, along with automated and instructor-provided feedback. These help in tracking progress and identifying areas that need improvement.</p>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allJobs'>Enroll Now !</Link></button>
                            </div>
                            <div className='w-[330px] lg:w-[400px]'>
                                <img src={ms3} alt=".." className='w-[330px] lg:w-[400px] rounded-2xl' />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[550px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center">

                        <img src={ms5} className="w-full h-[550px] md:h-[500px] rounded-2xl" />

                        <div className='w-full h-[550px] md:h-[500px] bg-[#244034] bg-opacity-65 p-8 rounded-2xl absolute z-20 flex flex-col md:flex-row justify-between items-center px-10 lg:px-28'>
                            <div className='w-[330px] lg:w-[400px] mb-10 lg:mb-0'>
                                <h2 className='text-2xl md:text-4xl font-bold text-teal-300 mb-5'>
                                Access to Resources
                                </h2>
                                <p className='text-lg font-medium text-white'>A comprehensive library of resources including e-books, research papers, videos, and supplementary materials. This ensures that students have all the necessary materials to support their learning journey.</p>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allJobs'>Enroll Now !</Link></button>
                            </div>
                            <div className='w-[330px] lg:w-[400px]'>
                                <img src={ms2} alt=".." className='w-[330px] lg:w-[400px] rounded-2xl' />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[550px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center">

                        <img src={ms6} className="w-full h-[550px] md:h-[500px] rounded-2xl" />

                        <div className='w-full h-[550px] md:h-[500px] bg-[#244034] bg-opacity-65 p-8 rounded-2xl absolute z-20 flex flex-col md:flex-row justify-between items-center px-10 lg:px-28'>
                            <div className='w-[330px] lg:w-[400px] mb-10 lg:mb-0'>
                                <h2 className='text-2xl md:text-4xl font-bold text-teal-300 mb-5'>
                                Instructor Support and Mentoring
                                </h2>
                                <p className='text-lg font-medium text-white'>Opportunities for direct interaction with instructors through virtual office hours, one-on-one mentoring sessions, and personalized feedback. This aspect is crucial for providing guidance, addressing doubts, and supporting students academic growth.</p>

                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allJobs'>Enroll Now !</Link></button>
                            </div>
                            <div className='w-[330px] lg:w-[400px]'>
                                <img src={ms1} alt=".." className='w-[330px] lg:w-[400px] rounded-2xl' />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                




            </Swiper>

        </div>

    );
};

export default Banner;