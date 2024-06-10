import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const SeeDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [courseLists, setCourseLists] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getCourseLists = async () => {
            const response = await axiosSecure.get('/courseLists');
            setCourseLists(response.data);
        };
        getCourseLists();
    }, [axiosSecure]);

    

    const courseDetails = courseLists.find(course => course._id === id);

    const userCourses = courseLists.filter(course => course.email === user.email);
    // const { role } = courseDetails;

    console.log(courseDetails);
    console.log(userCourses.length);

    if (!courseDetails) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }

    return (
        <div>
            <h2>Course Details</h2>
            <p>Title: {courseDetails.title}</p>
            <p>Name: {courseDetails.name}</p>
            <p>Length: {userCourses.length}</p>
        </div>
    );
};

export default SeeDetails;
