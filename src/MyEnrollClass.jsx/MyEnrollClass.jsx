import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import MyClasses from "./MyClasses";

const MyEnrollClass = () => {

    const { user, loading } = useContext(AuthContext);

    const userEmail = user?.email;

    const { isPending: coursesPending, data: courses } = useQuery({
        queryKey: ['course'],
        queryFn: () =>
            fetch('http://localhost:5000/courseLists')
                .then((res) =>
                    res.json(),
                ),
    })


    const { isPending: myClassesPending, data: myClasses } = useQuery({
        queryKey: ['myClasses', userEmail],
        queryFn: () =>
            fetch(`http://localhost:5000/payments/${userEmail}`)
                .then((res) => res.json()),
        enabled: !!userEmail
    });


    if (loading || coursesPending || myClassesPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    const enrolledCourses = [];

    myClasses.forEach(myClass => {
        const course = courses.find(course => course._id === myClass.courseId);
        enrolledCourses.push({ ...myClass, course });
    });



    console.log(courses);
    console.log(myClasses);
    console.log(enrolledCourses);



    return (
        <div className="mx-8">
            <div className="mt-10 roboto mb-20">
                <h2 className="mb-6 text-4xl text-center font-extrabold text-amber-800">My Classes</h2>
                <p className="text-center text-xl mb-10 text-stone-700">Welcome to EduQuest, your gateway to a world of knowledge. Dive into our diverse learning platform and embark on a quest to unlock your full potential.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-20 md:ml-10 lg:ml-5">
                    {
                        enrolledCourses.map(course => <MyClasses key={course.id} course={course}></MyClasses>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyEnrollClass;