import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { axiosSecure } from '../Hooks/useAxiosSecure';

const MyClassDetails = () => {
    const { id } = useParams();

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

    const handleSubmit = async (assignmentId) => {
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
                                <button onClick={() => handleSubmit(_id)} className="bg-orange-500 hover:bg-teal-200 py-1 px-3 rounded">
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