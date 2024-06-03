import { Link } from 'react-router-dom';
import teacher from '../assets/teach1.jpg';
const BecomeInstructor = () => {
    return (
        <div className="my-20">
            <h1 className='text-5xl font-bold mb-8 text-center'>Join as Teacher</h1>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={teacher} alt="teacher" className='w-[200px] h-full md:w-[400px] lg:w-[600px]' /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title text-2xl md:text-5xl">Become an Instructor </h2>
                    <p className='text-base md:text-xl'>Become an Instructor at EduQuest and share your expertise with eager learners worldwide. Inspire and educate a global audience while growing your professional profile. Join our community of passionate educators and make a lasting impact today.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline outline-teal-800 bg-teal-800 mt-5 px-10 text-teal-300"><Link to='/allJobs'>Join Now !</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeInstructor;