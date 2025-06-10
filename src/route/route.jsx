import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import LogIn from "../pages/logIn/LogIn";
import CardDetails from "../pages/Home/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
          path:'cardDetails/:id',
          Component: CardDetails
        }
    ]
  },
]);

export default router;
