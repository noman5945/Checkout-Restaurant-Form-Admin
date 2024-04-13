import React from "react";
import InputFood from "../components/InputFood";

const FoodMenu = () => {
  return (
    <div className=" flex flex-col">
      <p className=" font-bold text-xl">Food Menu</p>
      <div>
        <InputFood />
      </div>
    </div>
  );
};

export default FoodMenu;
