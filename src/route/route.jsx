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
import Marathons from "../pages/marathonPages/Marathons";
import CardDetails from "../pages/marathonPages/CardDetails";

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
        },
        {
          path:'marathons',
           loader: ()=>fetch('http://localhost:5000/marathons'),
          element: <PrivateRoute>
            <Marathons></Marathons>
          </PrivateRoute>
        },
        {
          path:'cardDetails/:id',
          loader:({params})=>fetch(`http://localhost:5000/marathons/${params.id}`).then(res=>res.json()),
          element: <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        },
        {

        }
    ]
  },
]);

export default router;
