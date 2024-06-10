import { useQuery } from "@tanstack/react-query";
import AllClass from "./AllClass";
import { useState } from "react";
import Pagination from "./Pagination";

const AllClasses = () => {
    const { isPending, data: courses } = useQuery({
        queryKey: ['courses'],
        queryFn: () =>
            fetch('https://b9a12-server-side-sam-skull19.vercel.app/courseLists').then((res) =>
                res.json(),
            ),
    })

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    if (isPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }

    const approvedCourses = courses.filter(course => course.status === 'approved');

    const indexOfLastCourse = currentPage * pageSize;
    const indexOfFirstCourse = indexOfLastCourse - pageSize;
    const currentCourses = approvedCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="max-w-[1170px] mx-auto pt-5">
            <div className="mt-10 roboto mb-20">
                <h2 className="mb-6 text-4xl text-center font-extrabold text-amber-400">All Courses</h2>
                <p className="text-center text-xl mb-5 text-stone-700">Welcome to EduQuest, your gateway to a world of knowledge. Dive into our diverse learning platform and embark on a quest to unlock your full potential.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-20 md:ml-10 lg:ml-5">
                    {
                        currentCourses.map(course => <AllClass key={course.id} course={course}></AllClass>)
                    }
                </div>

                <div className="flex justify-center mt-20">
                    <Pagination itemsPerPage={pageSize} totalItems={approvedCourses.length} currentPage={currentPage} paginate={paginate}></Pagination>
                </div>
            </div>
        </div>
    );
};

export default AllClasses;