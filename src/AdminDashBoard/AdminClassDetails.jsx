import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';


const AdminClassDetails = () => {
    const { id } = useParams();

    const { isPending: myCoursePending, data: course } = useQuery({
        queryKey: ['course'],
        queryFn: () =>
            fetch('http://localhost:5000/courseLists')
                .then((res) =>
                    res.json(),
                ),
    })

    const { isPending: feedbackPending, data: feedbacks } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: () =>
            fetch('http://localhost:5000/feedbacks')
                .then((res) =>
                    res.json(),
                ),
    })

    if (myCoursePending || feedbackPending ) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }



    const courseDetail = course && course.find(course => course._id === id);

    const {_id, name, image, shortdescription } = courseDetail;

    const courseFeedbacks = feedbacks.find(feedback => feedback.courseId === id);

    console.log(courseFeedbacks);
    console.log(feedbacks);


    const { title, feedback, rating } = courseFeedbacks;


    return (
        <div>
            <div className="mb-6 flex items-center p-4">
                <img src={image} alt={courseDetail.title} className="w-32 h-32 rounded-full mb-4" />
                <div className='ml-10'>
                    <h2 className="text-4xl font-bold mb-2">{courseDetail.title}</h2>
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
                            <th className="py-2 px-4 border border-red-900">Feedback</th>
                            <th className="py-2 px-4 border border-red-900">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={_id} className='text-white'>
                            <td className="py-2 px-4 border border-red-900">{title}</td>
                            <td className="py-2 px-4 border border-red-900">{feedback}</td>
                            <td className="py-2 px-4 border border-red-900">{rating}</td>

                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default AdminClassDetails;