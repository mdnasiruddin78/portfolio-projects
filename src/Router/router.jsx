import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlaiout from "../Mainlayout/Mainlaiout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlaiout></Mainlaiout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
      ]
    },
  ]);

  export default router;