import { createBrowserRouter } from "react-router-dom";
import Home from "./HomePage/Home";
import App from "./App";
import "./index.css";


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
    
    ]
    },
  
  ]);
  
  export default router;