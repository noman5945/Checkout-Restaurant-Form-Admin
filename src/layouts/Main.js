import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex flex-col items-center">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
