import { Link } from 'react-router-dom';
import stat1 from '../assets/ls3.jpg';
import stat2 from '../assets/ms2.jpg';
import stat3 from '../assets/ms8.jpg';

import { motion } from "framer-motion"

const Stats = () => {
    return (
        <div className='my-20'>
            <div className='flex flex-col justify-center items-center mb-10 ml-5 md:ml-0'>
                <h2 className='text-5xl font-bold'>Join With Us</h2>
                <p className='text-xl font-medium mt-5 text-slate-500 text-center'>Join Us at EduQuest to unlock your full potential and embark on a transformative learning journey. Together, we empower you to achieve your educational and career aspirations.</p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-16 md:ml-10 lg:ml-0'>

                <motion.div drag>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={stat1} alt="..." /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl font-bold text-orange-300">200k <br />Active Users</h2>
                            <p className='text-2xl text-stone-300'>1 million daily active users!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allJobs'>Join Now !</Link></button>
                            </div>
                        </div>
                    </div>

                </motion.div>

                <motion.div drag>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={stat2} alt="..." /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl font-bold text-orange-300">500k <br />Courses</h2>
                            <p className='text-2xl text-stone-300'>Over 50k Courses to learn</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allJobs'>Join Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </motion.div>


                <motion.div drag>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={stat3} alt="..." /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl font-bold text-orange-300">700k <br />Enrollment</h2>
                            <p className='text-2xl text-stone-300'>Over 300k courses Enrolled</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline outline-teal-800 mt-5 text-teal-300"><Link to='/allJobs'>Join Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </motion.div>



            </div>


        </div>
    );
};

export default Stats;