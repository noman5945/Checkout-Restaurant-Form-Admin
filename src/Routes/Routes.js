import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import GeneralDetails from "../pages/GeneralDetails";
import FoodMenu from "../pages/FoodMenu";

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
    ],
  },
]);
