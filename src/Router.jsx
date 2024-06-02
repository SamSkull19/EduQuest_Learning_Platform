import { createBrowserRouter } from "react-router-dom";
import Home from "./HomePage/Home";
import App from "./App";
import "./index.css";
import Login from "./UserAuth/Login";


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
            

        ]
    },

]);

export default router;