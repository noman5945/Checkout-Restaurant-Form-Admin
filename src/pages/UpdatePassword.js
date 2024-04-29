import React, { useState } from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const navigate = useNavigate();

  const handlePassChange = (event) => {
    event.preventDefault();
    try {
      if (password !== cpassword) {
        alert("Password Mismatch");
        return;
      }
      const updatePassInfo = {
        email,
        password,
      };
      console.log(updatePassInfo);
    } catch (error) {
      console.log(error);
    }
    event.target.reset();
  };
  return (
    <div className=" flex flex-col">
      <div className=" text-center font-bold text-xl">
        <h2>Update Password</h2>
      </div>
      <div className=" my-5 flex flex-col px-2 gap-2 w-[420px]">
        <form onSubmit={(event) => handlePassChange(event)}>
          <InputField
            title={"User Email"}
            placeholder={"user@gmail.com"}
            onChangeFn={setEmail}
          />
          <InputField
            title={"New Password"}
            placeholder={"New 6 digit Password"}
            onChangeFn={setPassword}
          />
          <InputField
            title={"Retype Password"}
            placeholder={"Retype the New Password"}
            onChangeFn={setCPassword}
          />
          <div className=" flex flex-col w-full gap-1">
            <CustomButton title={"Login"} type={"submit"} btnFn={() => {}} />
            <CustomButton
              title={"Cancel"}
              btnFn={() => {
                navigate("/");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
