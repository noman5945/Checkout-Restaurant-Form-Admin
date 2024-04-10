import React from "react";

const InputField = ({
  title,
  customstyles,
  width,
  onChangeFn,
  placeholder,
}) => {
  return (
    <div
      className={` flex flex-col items-start my-2 w-[${
        width ? width : 400
      }px] ${customstyles}`}
    >
      <label className=" ms-2">{title ? title : "Pass a title"}</label>
      <input
        placeholder={placeholder ? placeholder : title}
        required
        className=" border-2 bg-slate-50 rounded-lg w-full h-[35px] p-3 focus:outline-none focus:ring focus:border-blue-500"
        onChange={(e) => onChangeFn(e.target.value)}
      ></input>
    </div>
  );
};

export default InputField;
