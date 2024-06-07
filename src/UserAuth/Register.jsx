import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ls1 from '../assets/r1.jpg';
import ls2 from '../assets/r2.jpg';
import ls3 from '../assets/r3.jpg';
import { axiosSecure } from "../Hooks/useAxiosSecure";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const userList = async (user) => {
        const res = await axiosSecure.post('/userList', user);
        console.log(res.data);
    };

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const displayName = e.target.username.value;
        const photoURL = e.target.photoLink.value;
        const password = e.target.password.value;
        const acceptTerms = e.target.terms.checked;

        if (password.length < 6) {
            toast('Password should be more than 6 characters.');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            toast('Password should have at least one uppercase character.');
            return;
        }

        else if (!/[a-z]/.test(password)) {
            toast('Password should have at least one lowercase character.');
            return;
        }

        else if (!acceptTerms) {
            toast('Please accept our Terms and Conditions.');
            return;
        }


        createUser(email, password)
            .then(result => {
                const newUser = {
                    email: result.user.email,
                    displayName: displayName,
                    photoURL: photoURL
                };

                updateProfile(result.user, {
                    displayName: displayName,
                    photoURL: photoURL
                })
                    .then(() => console.log('Profile Updated'))
                    .catch(error => console.log(error));

                userList(newUser);

                toast('User Successfully Created');
                e.target.reset();
            })
            .catch(error => {
                console.log(error);
                toast('Already Registered');
            });



    }

    return (
        <div className="bg-teal-800 p-10 mx-auto rounded-2xl mt-10 mb-16 flex flex-col md:flex md:flex-row justify-evenly items-center gap-5">


            <div className="bg-emerald-700 p-7 rounded-2xl ml-0 lg:ml-48">
                <form onSubmit={handleRegister}>
                    <label className="input input-bordered flex items-center gap-2 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" name="username" className="grow" placeholder="Username" required />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" name="email" className="grow" placeholder="Email" required />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 mb-5 ">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>

                        <input type="text" name="photoLink" className="grow" placeholder="Photo Link" />
                    </label>


                    <label className="input input-bordered flex items-center gap-2 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" name="password" className="grow" placeholder="Password" required />
                    </label>

                    <p className="mb-5 text-white">Already have account? <Link to='/login' className="text-xs bg-teal-800 py-2 px-4 ml-2 rounded-xl font-medium">Login</Link></p>

                    <div className="flex items-center mb-3">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="text-xs font-medium ml-2 text-white" htmlFor="terms">Accept our Terms and Conditions</label>
                    </div>

                    <input className="btn btn-active w-full text-base" type="submit" value="Submit" />
                </form>
            </div>

            <div className="w-[340px] md:w-[400px] lg:w-[600px]">
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
            <ToastContainer />
        </div>

    );

};

export default Register;