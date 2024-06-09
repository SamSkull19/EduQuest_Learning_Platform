import { createBrowserRouter } from "react-router-dom";
import Home from "./HomePage/Home";
import App from "./App";
import "./index.css";
import Login from "./UserAuth/Login";
import Register from "./UserAuth/Register";
import AllClasses from "./AllClasses/AllClasses";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CourseDetails from "./CourseDetails/CourseDetails";
import Payment from "./PaymentProcess/Payment";
import TeachOnEduQuest from "./TeachOnEduQuest/TeachOnEduQuest";
import Dashboard from "./Dashboard/Dashboard";
import UserProfile from "./User/UserProfile";
import MyEnrollClass from "./MyEnrollClass.jsx/MyEnrollClass";
import DashboardHome from "./Dashboard/DashboardHome";
import MyClassDetails from "./MyEnrollClass.jsx/MyClassDetails";
import FeedBack from "./FeedBack/FeedBack";
import UsersLists from "./AdminDashBoard/UsersLists";
import AdminAllClasses from "./AdminDashBoard/AdminAllClasses";
import TeacherRequests from "./AdminDashBoard/TeacherRequests";
import MyAddClasses from "./TeacherDashboard.jsx/MyAddClasses";
import AddAClass from "./TeacherDashboard.jsx/AddAClass";
import SeeDetails from "./TeacherDashboard.jsx/SeeDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/allClasses",
                element: <AllClasses></AllClasses>
            },
            {
                path: "/courseDetails/:id",
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
            },
            {
                path: "/paymentCheckout",
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },

            {
                path: "/teachOnEduQuest",
                element: <PrivateRoute><TeachOnEduQuest></TeachOnEduQuest></PrivateRoute>
            },

        ]
    },

    // Dashboard Route
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "",
                element: <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
            },

            // User Dashboard Routes
            {
                path: "myProfile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: "myEnrollClasses",
                element: <PrivateRoute><MyEnrollClass></MyEnrollClass></PrivateRoute>
            },
            {
                path: "myCourseDetails/:id",
                element: <PrivateRoute><MyClassDetails></MyClassDetails></PrivateRoute>
            },
            {
                path: "feedback",
                element: <PrivateRoute><FeedBack></FeedBack></PrivateRoute>
            },

            // Admin Dashboard Routes
            {
                path: "teacherRequest",
                element: <PrivateRoute><TeacherRequests></TeacherRequests></PrivateRoute>
            },
            {
                path: "usersList",
                element: <PrivateRoute><UsersLists></UsersLists></PrivateRoute>
            },
            {
                path: "allClasses",
                element: <PrivateRoute><AdminAllClasses></AdminAllClasses></PrivateRoute>
            },

            // Teacher Dashboard Routes
            {
                path: "addAClass",
                element: <PrivateRoute><AddAClass></AddAClass></PrivateRoute>
            },
            {
                path: "myAddClass",
                element: <PrivateRoute><MyAddClasses></MyAddClasses></PrivateRoute>
            },
            {
                path: "myAddClass/:id",
                element: <PrivateRoute><SeeDetails></SeeDetails></PrivateRoute>
            },

        ]
    }

]);

export default router;