import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import GeneralDetails from "../pages/GeneralDetails";
import FoodMenu from "../pages/FoodMenu";
import SocialMedia from "../pages/SocialMedia";
import AddAgent from "../pages/AddAgent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <GeneralDetails></GeneralDetails>,
      },
      {
        path: "/foodmenu",
        element: <FoodMenu></FoodMenu>,
      },
      {
        path: "/social",
        element: <SocialMedia></SocialMedia>,
      },
      {
        path: "/add-new-agent",
        element: <AddAgent></AddAgent>,
      },
    ],
  },
]);
