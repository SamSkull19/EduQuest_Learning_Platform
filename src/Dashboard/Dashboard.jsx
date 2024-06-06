import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="max-w-[1170px] mx-auto bg-orange-200">
            <div className="drawer lg:drawer-open">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 min-h-full text-base-content bg-amber-700">
                        {/* Sidebar content here */}
                        
                        <li className="border-2 border-orange-200 bg-orange-200 rounded-xl mt-16 text-xl font-medium">
                            <NavLink to='/'>Home</NavLink>
                        </li>

                        <li className="border-2 border-orange-200 bg-orange-200 rounded-xl mt-10 text-xl font-medium">
                            <NavLink to='/dashboard/myProfile'>Profile</NavLink>
                        </li>

                        <li className="border-2 border-orange-200 bg-orange-200 rounded-xl mt-10 text-xl font-medium">
                            <NavLink to='/dashboard/myEnrollClasses'>My Enroll Class</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;