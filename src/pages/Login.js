import React, { useContext, useState } from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      const userInfo = {
        email,
        password,
      };
      login(email, password)
        .then((response) => {
          setUser(response.user);
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
      console.log(userInfo.email);
    } catch (error) {
      alert(error);
    }
    e.target.reset();
  };
  return (
    <div className=" flex flex-col">
      <div className=" text-center font-bold text-xl">
        <h2>User Login</h2>
      </div>
      <div className=" my-5 flex flex-col px-2 gap-2 w-[420px]">
        <form onSubmit={(e) => handleLogin(e)}>
          <InputField
            title={"User Email"}
            placeholder={"user@gmail.com"}
            onChangeFn={setEmail}
          />
          <InputField
            title={"User Password"}
            placeholder={"6 digit password"}
            onChangeFn={setPassword}
            textType={"password"}
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

export default Login;
