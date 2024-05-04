import React, { useContext, useState } from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const UpdatePassword = () => {
  const { user, updateUserPassword } = useContext(AuthContext);

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
        email: user?.email,
        password,
      };
      updateUserPassword(password)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
      console.log(updatePassInfo.email);
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
          <div className=" my-2 text-lg">
            <p className=" flex flex-col">
              Current User Email:
              <span className="bg-platinum p-2 rounded-md font-semibold">
                {" "}
                {user?.email}
              </span>
            </p>
          </div>
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
            <CustomButton
              title={"Update Password"}
              type={"submit"}
              btnFn={() => {}}
            />
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
