import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UpdateClassModal from './UpdateClassModal';
import { useQueryClient } from '@tanstack/react-query';

const MyAddClass = ({ course }) => {
    const { _id, title, name, image, price, shortdescription, status, email } = course;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const handleDelete = async () => {
        const confirmed = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        });

        if (confirmed.isConfirmed) {
            fetch(`http://localhost:5000/courseLists/${_id}`, {
                method: 'DELETE'
            })
            .then(() => {
                Swal.fire('Deleted!', 'Your class has been deleted.', 'success');
                queryClient.invalidateQueries('courses');
            })
            .catch((error) => {
                Swal.fire('Error!', 'Failed to delete the class.', error);
            });
        }
    };


    const handleUpdate = () => {
        setIsModalOpen(true);
    };

    const handleDetails = () => {
        if (status === 'approved') {
            navigate(`/dashboard/myAddClass/${_id}`);
        }
    };



    return (
        <div className='bg-teal-800 p-6 rounded-2xl animate__heartBeat w-[350px] h-full mt-5'>
            <div>
                <img src={image} alt={_id} className='w-[340px] h-[200px] rounded-2xl' />
            </div>
            <div className='mt-5'>
                <h3 className='text-base text-stone-400 font-medium mt-5'>Posted By : {name}</h3>
                <h3 className='text-base text-stone-400 font-medium mt-2'>Email : {email}</h3>
                <h3 className='text-2xl text-orange-200 font-extrabold mt-3'>Course: {title}</h3>
                <p className='text-xs bg-amber-200 text-stone-900 rounded-xl font-medium my-3 p-2 pl-3'>Details : {shortdescription}</p>
                <div className='flex flex-col mb-5'>
                    <h3 className='text-base text-center font-bold bg-amber-200 text-teal-800 w-full py-3 rounded-xl'>Price: {price}</h3>
                    <div className='flex flex-col'>
                        {status === 'pending' && (
                            <button onClick={handleDelete} className='btn bg-red-700 text-white mt-5'>
                                Delete
                            </button>
                        )}

                        <button onClick={handleUpdate} className='btn bg-lime-700 text-white mt-5'>
                            Update
                        </button>

                        <button onClick={handleDetails} className='btn bg-slate-400 mt-5'>
                            {status === 'approved' ? 'See Details' : 'Details Disabled'}
                        </button>
                        
                        {isModalOpen && <UpdateClassModal course={course} onClose={() => setIsModalOpen(false)} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

MyAddClass.propTypes = {
    course: PropTypes.object.isRequired,
};

export default MyAddClass;