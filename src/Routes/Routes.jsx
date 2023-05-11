import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignIn/SignUp";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Bookings from "../Pages/Bookings/Bookings";
import Private from "../Private/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "bookings",
        element: (
          <Private>
            <Bookings></Bookings>
          </Private>
        ),
      },
    ],
  },
]);

export default router;
