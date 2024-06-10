import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';
import { useQuery } from "@tanstack/react-query";

const TeachOnEduQuest = () => {
    const { user, loading } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;
    const [experience, setExperience] = useState('');
    const [category, setCategory] = useState('');
    const [qualification, setQualification] = useState('');

    const userEmail = user?.email;

    const { isPending: userPending, data: users } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
            fetch('https://b9a12-server-side-sam-skull19.vercel.app/userList')
                .then((res) =>
                    res.json(),
                ),
    })

    const handleTeachOnEduQuest = (event) => {
        event.preventDefault();

        const form = event.target;

        const userName = form.username.value;
        const userEmail = form.emailAddress.value;
        const images = form.imageLink.value;
        const experienceLevel = form.experience.value;
        const title = form.title.value;
        const jobCategory = form.category.value;
        const qualification = form.qualification.value;
        const experienceYear = form.experienceYear.value;
        const status = 'pending';

        const newTeacherRequest = { userName, userEmail, images, experienceLevel, title, jobCategory, qualification, experienceYear, status };

        console.log(newTeacherRequest);

        fetch('https://b9a12-server-side-sam-skull19.vercel.app/teacherRequests', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTeacherRequest)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Request Submitted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    event.target.reset();
                }
            });
    };


    if (loading || userPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    const validUser = users.find(user => user.email === userEmail) || { isAdmin: false, role: 'student' };
    const { role } = validUser;



    console.log(role)

    return (
        <div className="max-w-[1170px] mx-auto mt-10">

            {role === 'teacher' ? (
                <div>
                    <p className="text-teal-800 font-medium text-center">
                        You are already a teacher. Thank you for your contribution!
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="mb-6 mt-10 text-4xl text-center font-extrabold text-teal-800">Teach On EduQuest</h2>
                    <p className="text-teal-800 font-medium text-center">Teach on EduQuest and inspire the next generation of learners. Share your knowledge, reach a global audience, and make a meaningful impact on education.</p>

                    <section className="max-w-4xl p-6 mx-auto bg-teal-800 rounded-md mt-10 ">

                        <div className="flex flex-col justify-center items-center mt-8 mb-16">
                            <div className="flex flex-col justify-center items-center bg-cyan-600 p-5 w-1/3 rounded-3xl">
                                <img src={photoURL} alt="Profile" className="block w-32 rounded-full h-32 object-cover mt-2" />
                                <h1 className="text-4xl text-white mt-5 font-medium">{displayName}</h1>
                            </div>
                        </div>

                        <form onSubmit={handleTeachOnEduQuest}>

                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 text-lg">
                                <div>
                                    <label className="text-white">User Name :</label>
                                    <input type="text" id="username" name="username" placeholder="Enter Your Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" defaultValue={displayName} disabled />
                                </div>

                                <div>
                                    <label className="text-white ">Email Address : </label>
                                    <input type="email" id="emailAddress" name="emailAddress" placeholder="Enter Your Email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" defaultValue={email} disabled />
                                </div>

                                <div>
                                    <label className="text-white ">Image Link : </label>
                                    <input type="text" id="imageLink" name="imageLink" placeholder="Enter Your Photo Link" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" defaultValue={photoURL} disabled />
                                </div>

                                <div>
                                    <label className="text-white">Experience Level :</label>
                                    <select id="experience" name="experience" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" onChange={(e) => setExperience(e.target.value)} value={experience}>
                                        <option value="" disabled>Select Experience Level</option>
                                        <option>Beginner</option>
                                        <option>Experienced</option>
                                        <option>Mid-Level</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-white">Title :</label>
                                    <input type="text" id="title" name="title" placeholder="Enter Your Title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" />
                                </div>

                                <div>
                                    <label className="text-white">Category :</label>
                                    <select id="category" name="category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" onChange={(e) => setCategory(e.target.value)} value={category}>
                                        <option value="" disabled>Select Category</option>
                                        <option>Web Development</option>
                                        <option>Digital Marketing</option>
                                        <option>Data Science</option>
                                        <option>Graphic Design</option>
                                        <option>Business Management</option>
                                        <option>Coding</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-white">Qualification :</label>
                                    <input type="text" id="qualification" name="qualification" placeholder="Enter Your Qualification" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" onChange={(e) => setQualification(e.target.value)} value={qualification} />
                                </div>

                                <div>
                                    <label className="text-white">Experience :</label>
                                    <input type="number" id="experienceYear" name="experienceYear" placeholder="Enter Year of Experience" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" />
                                </div>
                            </div>
                            <div className="flex justify-center mt-10 py-5">
                                <button className="w-1/2 py-3 leading-5 text-black bg-slate-200 rounded-md hover:bg-gray-500 hover:text-white text-lg font-medium">Submit for Review</button>
                            </div>
                        </form>
                    </section>
                </div>
            )
            }
        </div>

    );
};

export default TeachOnEduQuest;
