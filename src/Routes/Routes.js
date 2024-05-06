import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import GeneralDetails from "../pages/GeneralDetails";
import FoodMenu from "../pages/FoodMenu";
import SocialMedia from "../pages/SocialMedia";
import AddAgent from "../pages/AddAgent";
import Login from "../pages/Login";
import UpdatePassword from "../pages/UpdatePassword";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import AdminRoute from "./PrivateRoutes/AdminRoute";
import AllUsers from "../pages/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/general-info",
        element: (
          <PrivateRoute>
            <GeneralDetails></GeneralDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/foodmenu",
        element: (
          <PrivateRoute>
            <FoodMenu></FoodMenu>
          </PrivateRoute>
        ),
      },
      {
        path: "/social",
        element: (
          <PrivateRoute>
            <SocialMedia></SocialMedia>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-new-agent",
        element: (
          <AdminRoute>
            <AddAgent></AddAgent>
          </AdminRoute>
        ),
      },
      {
        path: "/users-list",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/user-login",
        element: <Login></Login>,
      },
      {
        path: "/user-update-pass",
        element: (
          <PrivateRoute>
            <UpdatePassword></UpdatePassword>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
