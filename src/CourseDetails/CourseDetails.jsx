import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const CourseDetails = () => {
    const { isPending, data: course } = useQuery({
        queryKey: ['course'],
        queryFn: () =>
            fetch('http://localhost:5000/courseLists').then((res) =>
                res.json(),
            ),
    })


    const { user, loading } = useContext(AuthContext);

    const [courseData, setCourseData] = useState(course);

    useEffect(() => {
        setCourseData(course);
    }, [course]);

    console.log(user);

    const { id } = useParams();

    if (loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (isPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }


    const courseDetail = courseData && courseData.find(courseData => courseData._id === id);

    console.log(courseDetail);

    if (!courseDetail) {
        return <div>Details not found.</div>;
    }

    const { _id, title, name, image, price, shortdescription, totalenrolment } = courseDetail;


    return (
        <div className="max-w-[1170px] mx-auto mt-10 flex justify-center">

            <div className='bg-stone-300 p-6 rounded-2xl '>
                <h3 className='text-3xl text-gray-700 md:text-5xl font-bold mb-10 text-center '>Course : {title}</h3>
                <div className="flex flex-col md:flex-row justify-evenly bg-gray-800 p-8 rounded-2xl">
                    <div>
                        <img src={image} alt={_id} className='rounded-2xl w-[350px] md:w-[400px] lg:w-[550px] h-[300px]' />
                    </div>
                    <div className='ml-0 md:ml-10 mt-7 md:mt-0'>

                        <h4 className='text-3xl font-semibold text-cyan-200'>Instuctor : {name}</h4>


                        <div className="mt-5">
                            <h3 className='bg-cyan-700 text-2xl py-2 px-4 font-bold rounded-full w-full text-white text-center mb-3'>Enrolled By :  {totalenrolment}</h3>

                            <p className='text-2xl md:text-2xl bg-cyan-700 rounded-full font-bold text-white mt-2 py-2 w-full text-center'>Price : {price} <span className="font-extrabold">$</span></p>

                            <h1 className="text-xl md:text-2xl font-semibold text-cyan-200 mt-5 mb-3">Posted by : {name}</h1>
                        </div>

                        <button className="btn bg-amber-200 outline-amber-200 text-teal-800 mt-3 w-full h-16 text-2xl font-bold">Pay Now!</button>

                    </div>
                </div>

                <div className="my-8 bg-gray-800 text-stone-300 p-5 rounded-xl">
                    <h1 className="text-xl md:text-3xl font-semibold text-cyan-200 my-3">Course Detail :</h1>
                    <h3 className='text-xl md:text-3xl font-semibold text-cyan-200'>{shortdescription}</h3>
                </div>


            </div>
        </div>
    );
};

export default CourseDetails;