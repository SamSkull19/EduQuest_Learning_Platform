import PropTypes from 'prop-types';
// import { useLocation, useNavigate } from 'react-router-dom';

const AllClass = ({ course }) => {
    const { _id, title, name, image, price, shortdescription, totalenrolment } = course;

    console.log(course);

    return (
        <div>
            <div className=' bg-teal-800 p-6 rounded-2xl animate__heartBeat w-[350px] h-full mt-5'>
                <div>
                    <img src={image} alt={_id} className='w-[340px] h-[200px] rounded-2xl' />
                </div>
                <div className='mt-5'>

                    <h3 className='text-base text-stone-400 font-medium mt-5'>Posted By : {name}</h3>

                    <h3 className='text-2xl text-orange-200 font-extrabold mt-3'>Course: {title}</h3>


                    <p className='text-xs bg-amber-200 text-stone-900 rounded-xl font-medium my-3 p-2 pl-3'>Details : {shortdescription} </p>


                    <div className='flex items-center justify-between mb-5'>
                        <h3 className='text-base text-center font-bold bg-amber-200 text-teal-800 w-[130px] py-3 rounded-xl'>Price: {price}</h3>
                        <p className='text-base font-bold bg-amber-200 px-2 py-3 rounded-xl text-teal-800'>Enrolled By : <span className='bg-teal-800 w-5 p-1 px-3 text-sm rounded-3xl text-amber-200'>{totalenrolment}</span> </p>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button onClick='' className="btn bg-amber-200 outline-amber-200 text-teal-800 w-full text-lg">Enroll Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllClass.propTypes = {
    course: PropTypes.object.isRequired,
}

export default AllClass;