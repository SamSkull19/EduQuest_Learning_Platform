import { FaGoogle } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ls1 from '../assets/ls1.jpg';
import ls2 from '../assets/ls2.jpg';
import ls3 from '../assets/ls3.jpg';
import { axiosSecure } from "../Hooks/useAxiosSecure";
// import axios from "axios";

const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const userList = async (user) => {
        const res = await axiosSecure.post('/userList', user);
        console.log(res.data);
    };


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                userList(loggedInUser);

                toast('Successfully Logged in');
                e.target.reset();

                navigate(location?.state ? location.state : '/');
            })

            .catch(error => {
                console.log(error);
                toast("Invalid Email or Password");
            })
    }


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const goggleUser = result.user;
                console.log(goggleUser);

                userList(goggleUser);

                toast('Successfully Logged in with Google');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log('error', error.message);
                toast("Something went wrong");
            })
    }

    const handleGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser);

                userList(githubUser);

                toast('Successfully Logged in with GitHub');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log('error', error.message);
                toast("Something went wrong");
            })
    }


    return (
        <div className="bg-teal-800 p-10 mx-auto rounded-2xl mt-10 mb-16 flex flex-col-reverse md:flex md:flex-row justify-evenly items-center gap-5">


            <div className="w-[340px] md:w-[400px] lg:w-[600px] ml-0 lg:ml-48">
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        effect: "fade"
                    }}

                >
                    <SwiperSlide>
                        <div className="w-[340px] md:w-[400px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[400px] rounded-2xl flex flex-col md:flex-row items-center">
                            <img src={ls1} className="w-[340px] md:w-[400px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[400px] rounded-2xl" />
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-[340px] md:w-[400px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[400px] rounded-2xl flex flex-col md:flex-row items-center">
                            <img src={ls2} className="w-[340px] md:w-[400px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[400px] rounded-2xl" />
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-[340px] md:w-[400px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[400px] rounded-2xl flex flex-col md:flex-row items-center">
                            <img src={ls3} className="w-[340px] md:w-[400px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[400px] rounded-2xl" />
                        </div>

                    </SwiperSlide>




                </Swiper>
            </div>

            <div className="bg-emerald-700 p-7 rounded-2xl">
                <form onSubmit={handleLogin}>
                    <label className="input input-bordered flex items-center gap-2 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" name="email" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" name="password" className="grow" placeholder="Password" />
                    </label>

                    <input className="btn btn-active w-full text-lg" type="submit" value="Login" />

                    <div className="flex justify-between items-center mt-5">
                        <p className="text-xs  p-2 rounded-xl text-white font-medium bg-teal-800"><Link to='/register'>Register Now</Link></p>
                        <p className="text-xs p-2 rounded-xl text-white font-medium bg-teal-800"><Link>Forget Password</Link></p>
                    </div>

                </form>
                <div className="mt-5">
                    <button onClick={handleGoogleLogin} className="flex items-center bg-red-500 text-white justify-center p-2 rounded-lg w-full"><FaGoogle className="mr-3" /> Login With Google</button>

                    <button onClick={handleGithubLogin} className="flex items-center bg-gray-500 text-white justify-center p-2 rounded-lg mt-5 w-full"><FaSquareGithub className="mr-3" /> Login With Github</button>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;