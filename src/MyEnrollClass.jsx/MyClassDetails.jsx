import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

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

    if (myCoursePending) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    const courseDetail = course && course.find(course => course._id === id);

    console.log(courseDetail);

    if (!courseDetail) {
        return <div>Details not found.</div>;
    }

    const { _id, title, name, image, shortdescription, totalenrolment } = courseDetail;

    console.log(course);

    return (
        <div>
            <div className="mb-6 flex items-center p-4">
                <img src={image} alt={title} className="w-40 h-40 rounded-full mb-4" />
                <div className='ml-10'>
                    <h2 className="text-4xl font-bold mb-2">{title}</h2>
                    <p className="text-xl mb-4">{shortdescription}</p>
                    <p className="text-lg">Instructor: {name}</p>
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
                            <td className="py-2 px-4 border border-red-900">{shortdescription}</td>
                            <td className="py-2 px-4 border border-red-900">{totalenrolment}</td>
                            <td className="py-2 px-4 border border-red-900">
                                <button className="bg-orange-500 hover:bg-teal-200 py-1 px-3 rounded">Submit</button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyClassDetails;