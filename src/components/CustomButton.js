import React from "react";

const CustomButton = ({ title, btnFn, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className=" h-[40px] rounded-lg bg-red-400 text-center text-white p-2 my-3 hover:bg-red-600 transition ease-in-out duration-500"
      onClick={btnFn}
    >
      {title ? title : "Custom Button"}
    </button>
  );
};

export default CustomButton;
