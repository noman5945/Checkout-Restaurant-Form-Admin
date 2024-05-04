import React, { useContext } from "react";
import toplogo from "../assets/logos/Checkout-white.png";
import CustomButton from "./CustomButton";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigation = useNavigate();
  return (
    <div className=" flex flex-row items-center justify-between p-3 bg-black h-[100px]  lg:h-[100px] shadow-lg w-full">
      <div className=" h-fit w-[200px] lg:w-[300px]">
        <img src={toplogo} alt="Checkout" className=" h-[90px] w-[250px]" />
      </div>
      {user?.email ? (
        <div className=" flex flex-row w-[100px]">
          <CustomButton title={"Log Out"} btnFn={logOut} />
        </div>
      ) : (
        <div className=" flex flex-row w-[100px]">
          <CustomButton
            title={"Log In"}
            btnFn={() => {
              navigation("/user-login");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
