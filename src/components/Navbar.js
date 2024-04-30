import React from "react";
import toplogo from "../assets/logos/Checkout-white.png";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <div className=" flex flex-row items-center justify-between p-3 bg-black h-[100px]  lg:h-[100px] shadow-lg w-full">
      <div className=" h-fit w-[200px] lg:w-[300px]">
        <img src={toplogo} alt="Checkout" className=" h-[90px] w-[250px]" />
      </div>
      <div className=" flex flex-row w-[100px]">
        <CustomButton title={"Log In"} btnFn={() => {}} />
      </div>
    </div>
  );
};

export default Navbar;
