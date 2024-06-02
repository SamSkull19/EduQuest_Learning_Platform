import { useContext } from "react";
import { LuBookOpenCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Logged Out');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="roboto">
            <div className="navbar bg-teal-800 pt-5 pb-5">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-teal-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow rounded-box w-52 bg-teal-800 bg-opacity-80 text-teal-200">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/allJobs'>All Classes</Link></li>
                            <li><Link to='/blog'>Teach on EduQuest</Link></li>
                            {/* {
                                user && <>
                                    <li><Link to='/myAppliedJobs'>Applied Jobs</Link></li>

                                </>
                            } */}

                        </ul>
                    </div>


                    <a className="text-2xl font-bold flex items-center justify-center animate__animated animate__rubberBand text-teal-300"> <LuBookOpenCheck className="mr-2 mt-2" />EduQuest</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-teal-200 text-lg font-medium">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allJobs'>All Classes</Link></li>
                        <li><Link to='/blog'>Teach on EduQuest</Link></li>
                        {/* {
                            user && <>
                                <li><Link to='/myAppliedJobs'>Applied Jobs</Link></li>

                            </>
                        } */}

                    </ul>
                </div>
                <div className="navbar-end flex items-center">
                    <div>
                        {
                            user ?
                                <div className="flex gap-2">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt='...' src={user && user.photoURL} />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="mt-3 z-20 p-2 shadow menu menu-sm dropdown-content rounded-box w-52 text-lime-100 bg-lime-900 bg-opacity-80">
                                            <li>
                                                <a>{user && user.displayName}</a>
                                            </li>
                                            <li>
                                                <a onClick={handleLogOut}>Logout</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                :
                                <div className="flex items-center">
                                    <button className="btn btn-neutral bg-teal-600 text-lg px-8 font-medium"> <Link to='/login'>Login</Link> </button>
                                    {/* <button className=" btn btn-neutral bg-teal-600 text-sm px-4 font-medium w-20 ml-4"> <Link to='/register'>Register</Link></button> */}
                                </div>
                        }


                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;