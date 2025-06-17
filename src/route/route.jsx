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
import MarathonsRegistration from "../pages/marathonPages/MarathonsRegistration";
import MyRegistrationPage from "../pages/marathonPages/MyRegistrationPage";
import MyMarathonsList from "../pages/myMarathonList/MyMarathonsList";
import AboutMe from "../Components/AboutMe";
import FollowMore from "../Components/FollowMore";


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
          // loader: ({params})=>fetch(`http://localhost:5000/marathonData/${params.id}`)
        },
        {
          path: 'addMarathon',
          element:<PrivateRoute>
            <AddMarathon></AddMarathon>
          </PrivateRoute>
        },

        {
          path:'myMarathonsList',
          element:<PrivateRoute>
            <MyMarathonsList></MyMarathonsList>
          </PrivateRoute>,
          loader: () => fetch('http://localhost:5000/marathons')
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
          // loader:({params})=>fetch(`http://localhost:5000/marathons/${params.id}`).then(res=>res.json()),
          element: <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        },
        {
          path: 'marathonsRegistration/:id',
           loader: ({ params }) => fetch(`http://localhost:5000/marathons/${params.id}`).then(res => res.json()),
          element: <PrivateRoute><MarathonsRegistration></MarathonsRegistration></PrivateRoute>
        },
        {
          path:'myApplyList',
          element: <PrivateRoute>
           <MyRegistrationPage></MyRegistrationPage>
          </PrivateRoute>
        },
        {
          path: 'followMore',
          element: <PrivateRoute>
            <FollowMore></FollowMore>
          </PrivateRoute>
        },
        // {
        //   path:'updateApplyInfo/:id',  
        //   // applyInfo = registerInfo----
        //   loader: (params)=>fetch(`http://localhost:5000/apply/${params.id}`),
        //   element:<PrivateRoute>
        //     <UpdateRegistrationInfo></UpdateRegistrationInfo>
        //   </PrivateRoute>
        // }

    ]
  },
]);

export default router;
