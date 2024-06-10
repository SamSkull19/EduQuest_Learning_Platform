import { useQuery } from "@tanstack/react-query";
import MyAddClass from "./MyAddClass";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Pagination from "../AllClasses/Pagination";

const MyAddClasses = () => {
    const { user } = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(1);
    const { email } = user;

    const { isPending, data: courses } = useQuery({
        queryKey: ['courses'],
        queryFn: () =>
            fetch('https://b9a12-server-side-sam-skull19.vercel.app/courseLists').then((res) =>
                res.json(),
            ),
    })

    if (isPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }


    const myApprovedCourses = courses.filter(course => course.email === email);

    const pageSize = 10;
    const indexOfLastCourse = currentPage * pageSize;
    const indexOfFirstCourse = indexOfLastCourse - pageSize;
    const currentCourses = myApprovedCourses.slice(indexOfFirstCourse, indexOfLastCourse);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className='max-w-[1170px] mx-auto pt-5'>
            <div className='mt-10 roboto mb-20'>
                <h2 className='mb-6 text-4xl text-center font-extrabold text-teal-900'>My Classes</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ml-10 md:ml-10 lg:ml-5'>
                    {
                        currentCourses.map(course =>  <MyAddClass key={course._id} course={course}  /> )
                    }
                    
                </div>
            </div>

            <div className="flex justify-center mt-20">
                <Pagination itemsPerPage={pageSize} totalItems={myApprovedCourses.length} currentPage={currentPage} paginate={paginate}></Pagination>
            </div>
        </div>
    );
};

export default MyAddClasses;