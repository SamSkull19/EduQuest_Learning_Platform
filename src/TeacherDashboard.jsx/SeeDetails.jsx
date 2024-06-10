import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import stat3 from '../assets/ms8.jpg';
import stat1 from '../assets/ls3.jpg';
import stat2 from '../assets/ms2.jpg';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const SeeDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [courseLists, setCourseLists] = useState([]);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const getCourseLists = async () => {
            const response = await axiosSecure.get('/courseLists');
            setCourseLists(response.data);
        };
        getCourseLists();
    }, [axiosSecure]);

    const { isPending, data: assignments } = useQuery({
        queryKey: ['assignments'],
        queryFn: () =>
            fetch('http://localhost:5000/assignments')
                .then((res) =>
                    res.json(),
                ),
    })

    console.log(assignments.length);

    const courseDetails = courseLists.find(course => course._id === id);

    const assignmentDetails = assignments.find(assignment => assignment.courseId === id);

    const totalEnrolment = courseDetails?.totalenrolment;
    const perDayAssignment = assignmentDetails?.perDayAssignment;


    if (!courseDetails || isPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }


    const onSubmit = async (data) => {

        const assignmentAdd = {
            title: data.title,
            deadline: data.deadline,
            assignmentDescription: data.assignmentDescription,
            perDayAssignment: 0,
            courseId: id
        }

        console.log(data);
        console.log(assignmentAdd);

        const response = await axiosSecure.post('/assignments', assignmentAdd);

        console.log(response.data);

        if (response.data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Class Add Request Submitted Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add class',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    };

    return (
        <div className='mb-20'>
            <h2 className='text-3xl font-bold mb-5'>Course</h2>
            <p className='text-xl font-medium mb-10'>Title: {courseDetails.title}</p>

            <div className='mb-10'>
                <div className="card w-60 bg-base-100 shadow-xl image-full mb-5">
                    <figure><img src={stat3} alt="..." /></figure>
                    <div className="card-body text-center mt-5">
                        <h2 className="card-title text-lg font-bold text-orange-300">Total Enrollment : {totalEnrolment} </h2>
                    </div>
                </div>
                
                <div className="card w-60 bg-base-100 shadow-xl image-full mb-5">
                    <figure><img src={stat2} alt="..." /></figure>
                    <div className="card-body text-center mt-5">
                        <h2 className="card-title text-lg font-bold text-orange-300"> Total Assignment : {assignments.length} </h2>
                    </div>
                </div>
                
                <div className="card w-60 bg-base-100 shadow-xl image-full mb-5">
                    <figure><img src={stat1} alt="..." /></figure>
                    <div className="card-body text-center mt-5">
                        <h2 className="card-title text-lg font-bold text-orange-300"> Per Day Assignment : {perDayAssignment} </h2>
                    </div>
                </div>
            </div>

            <h3 className='text-xl font-medium text-zinc-600 mb-5'>2. Class assignment</h3>


            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn bg-gray-700 text-white text-xl" onClick={() => document.getElementById('my_modal_1').showModal()}><span className='text-2xl'>+</span> Create</button>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-orange-200 pb-8">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-lg font-medium text-gray-800">
                                Assignment Title:
                            </label>
                            <input
                                id="title"
                                type="text"
                                {...register('title', { required: true })}
                                className="mt-1 block w-full border border-slate-500 rounded-md shadow-sm p-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="deadline" className="block text-lg font-medium text-gray-800">
                                Assignment Deadline:
                            </label>
                            <input
                                id="deadline"
                                type="date"
                                {...register('deadline', { required: true })}
                                className="mt-1 block w-full border border-slate-500 rounded-md shadow-sm p-2"
                            />
                        </div>



                        <div>
                            <label htmlFor="assignmentDescription" className="block text-lg font-medium text-gray-800">
                                Assignment Description:
                            </label>
                            <textarea
                                id="assignmentDescription"
                                {...register('assignmentDescription', { required: true })}
                                className="mt-1 block w-full border border-slate-500 rounded-md shadow-sm p-2"
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-lg "
                        >
                            Create Assignment
                        </button>
                    </form>


                </div>
            </dialog>
        </div>
    );
};

export default SeeDetails;
