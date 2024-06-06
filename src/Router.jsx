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

]);

export default router;