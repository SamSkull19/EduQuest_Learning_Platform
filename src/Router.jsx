import { createBrowserRouter } from "react-router-dom";
import Home from "./HomePage/Home";
import App from "./App";
import "./index.css";
import Login from "./UserAuth/Login";
import Register from "./UserAuth/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        //   errorElement: <ErrorPage></ErrorPage>,
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
            

        ]
    },

]);

export default router;