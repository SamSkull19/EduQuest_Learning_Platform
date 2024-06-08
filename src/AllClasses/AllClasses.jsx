import { useQuery } from "@tanstack/react-query";
import AllClass from "./AllClass";

const AllClasses = () => {
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

    const approvedCourses = courses.filter(course => course.status === 'approved');

    console.log(courses);
    return (
        <div className="max-w-[1170px] mx-auto pt-5">
            <div className="mt-10 roboto mb-20">
                <h2 className="mb-6 text-4xl text-center font-extrabold text-amber-400">All Courses</h2>
                <p className="text-center text-xl mb-5 text-stone-700">Welcome to EduQuest, your gateway to a world of knowledge. Dive into our diverse learning platform and embark on a quest to unlock your full potential.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-20 md:ml-10 lg:ml-5">
                    {
                        approvedCourses.map(course => <AllClass key={course.id} course={course}></AllClass>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllClasses;