import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlaiout from "../Mainlayout/Mainlaiout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import ProjectsDetails from "../Pages/ProjectsDetails";


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
        {
          path: '/projectDetail/:id',
          element: <ProjectsDetails></ProjectsDetails>,
          loader: () => fetch(`/projects.json`)
        }
      ]
    },
  ]);

  export default router;