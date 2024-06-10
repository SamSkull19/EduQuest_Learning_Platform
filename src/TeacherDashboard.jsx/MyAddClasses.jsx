import { useQuery } from "@tanstack/react-query";
import MyAddClass from "./MyAddClass";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyAddClasses = () => {
    const { user } = useContext(AuthContext);

    const { email } = user;

    const { isPending, data: courses } = useQuery({
        queryKey: ['courses'],
        queryFn: () =>
            fetch('http://localhost:5000/courseLists').then((res) =>
                res.json(),
            ),
    })

    if (isPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }


    const myApprovedCourses = courses.filter(course => course.email === email);



    return (
        <div className='max-w-[1170px] mx-auto pt-5'>
            <div className='mt-10 roboto mb-20'>
                <h2 className='mb-6 text-4xl text-center font-extrabold text-teal-900'>My Classes</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ml-10 md:ml-10 lg:ml-5'>
                    {
                        myApprovedCourses.map(course =>  <MyAddClass key={course._id} course={course}  /> )
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default MyAddClasses;