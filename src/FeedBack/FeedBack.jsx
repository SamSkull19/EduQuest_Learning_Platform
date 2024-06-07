import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';

const FeedBack = () => {
    const { user, loading } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;


    const handleTeachOnEduQuest = (event) => {
        event.preventDefault();

        const form = event.target;

        const userName = form.username.value;
        const emailAddress = form.emailAddress.value; // Add email to newFeedback
        const photo = form.photo.value;
        const title = form.title.value;
        const feedback = form.feedback.value;

        const newFeedback = { userName, emailAddress, photo, title, feedback };

        console.log(newFeedback);

        fetch('http://localhost:5000/feedbacks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Feedback Submitted',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    event.target.reset();
                }
            });
    };


    if (loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }


    return (
        <div className="max-w-[1170px] mx-auto mt-10 mb-20">
            <h2 className="mb-6 mt-10 text-4xl text-center font-extrabold text-teal-800">Feedback</h2>
            <p className="text-teal-800 font-medium text-center px-16">Please, share thoughts where we can improve our system and make it more efficient. Give thoughts on how is your learning going.</p>

            <section className="max-w-4xl p-6 mx-auto bg-teal-800 rounded-md mt-10 w-3/5">

                <form onSubmit={handleTeachOnEduQuest}>

                    <div className="grid grid-cols-1 gap-6 mt-4 text-lg">
                        <div>
                            <label className="text-white">User Name :</label>
                            <input type="text" id="username" name="username" placeholder="Enter Your Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" defaultValue={displayName} disabled />
                        </div>

                        <div>
                            <label className="text-white ">Email Address : </label>
                            <input type="email" id="emailAddress" name="emailAddress" placeholder="Enter Your Email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" defaultValue={email} disabled />
                        </div>

                        <div>
                            <label className="text-white ">Photo : </label>
                            <input type="text" id="photo" name="photo" placeholder="Enter Your Photo URL" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" defaultValue={photoURL} disabled />
                        </div>


                        <div>
                            <label className="text-white">Title :</label>
                            <input type="text" id="title" name="title" placeholder="Enter Your Title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" />
                        </div>


                        <div>
                            <label className="text-white">Feedback :</label>
                            <input type="text" id="feedback" name="feedback" placeholder="Enter Your Feedback" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-10 py-5">
                        <button className="w-1/2 py-3 leading-5 text-black bg-slate-200 rounded-md hover:bg-gray-500 hover:text-white text-lg font-medium">Submit for Feedback</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default FeedBack;