import React from "react";
import InputField from "./InputField";

const InputFood = ({ nameFn, typeFn, priceFn }) => {
  return (
    <div className=" flex flex-col bg-platinum rounded-lg">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2 p-4">
        <InputField
          title={"Food Name"}
          width={15}
          placeholder={"e.g Burger"}
          onChangeFn={nameFn}
        />
        <InputField
          title={"Type"}
          width={15}
          placeholder={"e.g Fastfood"}
          onChangeFn={typeFn}
        />
        <InputField
          title={"Price(Tk)"}
          width={15}
          placeholder={"e.g 500"}
          onChangeFn={priceFn}
        />
      </div>
    </div>
  );
};

export default InputFood;
