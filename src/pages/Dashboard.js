import React from "react";
import addAgentpic from "../assets/logos/add-agent.svg";
import addRestPic from "../assets/logos/add-rest.svg";
import configAccount from "../assets/logos/account-config.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const changePageFunction = (link) => {
    navigate(link);
  };
  return (
    <div className=" flex flex-col items-center">
      <div className=" text-center text-xl font-bold my-2">
        <h2>Checkout Restaurant and Agent Maintainer</h2>
      </div>
      <div className=" grid grid-cols-1 gap-2 lg:grid-cols-3 my-2">
        <div
          className=" bg-platinum rounded-md w-[300px] h-[200px] p-2 flex flex-col shadow-md items-center m-2 cursor-pointer"
          onClick={() => changePageFunction("/general-info")}
        >
          <img src={addRestPic} alt="add new restaurant" />
          <p>Add New Restaurant</p>
        </div>
        <div
          className=" bg-platinum rounded-md w-[300px] h-[200px] p-2 flex flex-col shadow-md m-2 items-center cursor-pointer"
          onClick={() => changePageFunction("/add-new-agent")}
        >
          <img src={addAgentpic} alt="add new agent" />
          <p>Add New Agent</p>
        </div>
        <div
          className=" bg-platinum rounded-md w-[300px] h-[200px] p-2 flex flex-col shadow-md items-center m-2 cursor-pointer"
          onClick={() => changePageFunction("/user-update-pass")}
        >
          <img src={configAccount} alt="add new agent" />
          <p>Configure Account</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
