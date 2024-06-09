import { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';


const SeeDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [courseLists, setCourseLists] = useState([]);

    useEffect(() => {
        const getCourseLists = async () => {
            const response = await axiosSecure.get('/courseLists');
            setCourseLists(response.data);
        };
        getCourseLists();
    }, [axiosSecure]);

    

    const courseDetails = courseLists.find(course => course._id === id);
    // const { role } = courseDetails;

    console.log(courseDetails);

    if (!courseDetails) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }

    return (
        <div>
            <h2>Course Details</h2>
            <p>Title: {courseDetails.title}</p>
            <p>Name: {courseDetails.name}</p>
        </div>
    );
};

export default SeeDetails;
