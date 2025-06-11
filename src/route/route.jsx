import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import LogIn from "../pages/logIn/LogIn";
import MarathonCardDetails from "../pages/cardDetails/MarathonCardDetails";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AddMarathon from "../pages/marathonPages/AddMarathon";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
          index: true,
          Component:Home
        },
        {
          path:'register',
          Component:Register
        },
        {
          path: 'logIn',
          Component:LogIn
        },
        {
          path:'/marathonCardDetails/:id',
          Component: MarathonCardDetails,
          loader: ({params})=>fetch(`http://localhost:5000/marathonData/${params.id}`)
        },
        {
          path: 'addMarathon',
          element:<PrivateRoute>
            <AddMarathon></AddMarathon>
          </PrivateRoute>
        }
    ]
  },
]);

export default router;
