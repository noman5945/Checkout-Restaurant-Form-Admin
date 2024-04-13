import React, { useState } from "react";
import InputFood from "../components/InputFood";
import CustomButton from "../components/CustomButton";

const FoodMenu = () => {
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodtype] = useState("");
  const [foodprice, setFoodPrice] = useState("");
  const [foodMenu, setFoodMenu] = useState([]);

  const addToMenu = () => {
    const foodItem = {
      foodName: foodName,
      foodType: foodType,
      foodPrice: foodprice,
    };
    setFoodMenu([...foodMenu, foodItem]);
    console.log(foodMenu);
  };

  return (
    <div className=" flex flex-col">
      <p className=" font-bold text-xl">Food Menu</p>
      <div id="food-item-list" className="input-food">
        <div id="food-item">
          <InputFood
            nameFn={setFoodName}
            typeFn={setFoodtype}
            priceFn={setFoodPrice}
          />
        </div>
      </div>
      <div className=" lg:w-[50%]">
        <CustomButton
          title={"Add New Food Item"}
          type={"button"}
          btnFn={addToMenu}
        />
      </div>

      {foodMenu.map((item, index) => (
        <div key={index} className=" flex flex-col ">
          <div className=" flex flex-row gap-4">
            <div>{item.foodName}</div>
            <div>{item.foodType}</div>
            <div>{item.foodPrice}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodMenu;
