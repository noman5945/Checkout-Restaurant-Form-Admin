import React from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";

const AddAgent = () => {
  return (
    <div className=" flex flex-col">
      <div className=" text-center font-bold text-xl">
        <h2>Add New Agent</h2>
      </div>
      <div className=" my-5 flex flex-col px-2 gap-2 w-[420px]">
        <form>
          <InputField
            title={"Agent Name"}
            width={600}
            placeholder={"e.g John"}
            onChangeFn={() => {}}
          />
          <InputField
            title={"Agent Phone No"}
            width={600}
            placeholder={"e.g 016XXXXXXXX"}
            onChangeFn={() => {}}
          />
          <InputField
            title={"Agent Email"}
            width={600}
            placeholder={"e.g john@gmail.com"}
            onChangeFn={() => {}}
          />
          <InputField
            title={"Operating Location"}
            width={600}
            placeholder={"e.g Mohammadpur"}
            onChangeFn={() => {}}
          />
          <InputField
            title={"Initial Password"}
            width={600}
            placeholder={"6 digit inital password"}
            onChangeFn={() => {}}
          />
          <CustomButton title={"Add Agent"} type={"submit"} btnFn={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default AddAgent;
