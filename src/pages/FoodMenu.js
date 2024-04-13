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
  };
  /**
   * Add to Database with given resturaunt ID
   */
  const addFoodMenu = () => {
    console.log(foodMenu);
  };
  return (
    <div className=" flex flex-col py-2">
      <p className=" font-bold text-xl text-center py-2">Food Menu</p>
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
      <div className=" flex flex-col ">
        <p className=" text-lg font-semibold py-2">Added Foods in the Menu</p>
        <div className=" flex flex-row ">
          <div className="w-[25vw] lg:w-[15vw]">Food Name</div>
          <div className="w-[25vw] lg:w-[15vw]">Food Type</div>
          <div className="w-[25vw] lg:w-[15vw]">Price (Tk)</div>
        </div>
        {foodMenu.map((item, index) => (
          <div key={index} className=" flex flex-row  bg-platinum gap-1">
            <div className="w-[25vw] lg:w-[15vw] p-1 border-2 border-spacing-2 border-black py-1">
              <p className=" overflow-x-auto">{item.foodName}</p>
            </div>
            <div className="w-[25vw] lg:w-[15vw] p-1 border-2 border-spacing-2 border-black py-1">
              <p className=" overflow-x-auto">{item.foodType}</p>
            </div>
            <div className="w-[25vw] lg:w-[15vw] p-1 border-2 border-spacing-2 border-black py-1">
              <p className=" overflow-x-auto">{item.foodPrice}</p>
            </div>
          </div>
        ))}
      </div>
      <CustomButton title={"Add Menu"} type={"button"} btnFn={addFoodMenu} />
    </div>
  );
};

export default FoodMenu;
