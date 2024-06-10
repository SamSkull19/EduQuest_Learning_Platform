import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';

const MyClassDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, setValue } = useForm();

    const { isPending: myCoursePending, data: course } = useQuery({
        queryKey: ['course'],
        queryFn: () =>
            fetch('http://localhost:5000/courseLists')
                .then((res) =>
                    res.json(),
                ),
    })

    const { isPending: myAssignmentPending, data: assignments } = useQuery({
        queryKey: ['assignments'],
        queryFn: () =>
            fetch('http://localhost:5000/assignments')
                .then((res) =>
                    res.json(),
                ),
    })

    if (myCoursePending || myAssignmentPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }



    const courseDetail = course && course.find(course => course._id === id);

    const { name, image, shortdescription } = courseDetail;

    const courseAssignments = assignments.find(assignment => assignment.courseId === id);

    console.log(courseAssignments);


    const { _id, title, deadline, assignmentDescription } = courseAssignments;

    const handleAssignmentSubmit = async (assignmentId) => {
        console.log(assignmentId);
        const response = await axiosSecure.put(`/assignments/submit/${assignmentId}`);
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Assignment Submitted Successfully!',
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }

    };



    const onSubmit = async (data) => {

        const feedbackAdd = {
            title: courseDetail.title,
            feedback: data.feedbackDescription,
            courseId: id,
            name: name,
            image: image,
            rating: data.rating
        }

        console.log(data);
        console.log(feedbackAdd);

        const response = await axiosSecure.post('/feedbacks', feedbackAdd);

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



    const ratingChanged = (newRating) => {
        setValue('rating', newRating);
    };




    return (
        <div>
            <div className="mb-6 flex items-center p-4">
                <img src={image} alt={title} className="w-32 h-32 rounded-full mb-4" />
                <div className='ml-10'>
                    <h2 className="text-4xl font-bold mb-2">{title}</h2>
                    <p className="text-xl mb-2 font-medium">{shortdescription}</p>
                    <p className="text-xl font-semibold text-amber-950">Instructor: {name}</p>
                </div>
            </div>

            {/* Modal */}

            <button className="btn bg-gray-700 text-white text-xl mb-10" onClick={() => document.getElementById('my_modal_1').showModal()}> Teaching Evaluation Report (TER) </button>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-orange-200 pb-8">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="space-y-6">

                        <div>
                            <label htmlFor="feedbackDescription" className="block text-lg font-medium text-gray-800">
                                Your Feedback:
                            </label>
                            <textarea
                                id="feedbackDescription"
                                {...register('feedbackDescription', { required: true })}
                                className="mt-1 block w-full border border-slate-500 rounded-md shadow-sm p-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="rating" className="block text-lg font-medium text-gray-800">
                                Rate Teacher:
                            </label>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>





                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-lg "
                        >
                            Send button
                        </button>
                    </form>


                </div>
            </dialog>

            {/* Modal End */}

            <div className='p-4 border-y-2 border-orange-700'>
                <h3 className="text-3xl font-semibold mb-4">Assignments</h3>

                <table className="min-w-full bg-teal-700">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border border-red-900">Title</th>
                            <th className="py-2 px-4 border border-red-900">Description</th>
                            <th className="py-2 px-4 border border-red-900">Deadline</th>
                            <th className="py-2 px-4 border border-red-900">Submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={_id} className='text-white'>
                            <td className="py-2 px-4 border border-red-900">{title}</td>
                            <td className="py-2 px-4 border border-red-900">{assignmentDescription}</td>
                            <td className="py-2 px-4 border border-red-900">{deadline}</td>
                            <td className="py-2 px-4 border border-red-900">
                                <button onClick={() => handleAssignmentSubmit(_id)} className="bg-orange-500 hover:bg-teal-200 py-1 px-3 rounded">
                                    Submit
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyClassDetails;