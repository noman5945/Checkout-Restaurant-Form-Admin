import React, { useContext, useState } from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../Providers/AuthProvider";
import CustomLoader from "../components/CustomLoader";
import { useNavigate } from "react-router-dom";

const AddAgent = () => {
  const [agentName, setAgentName] = useState("");
  const [agentPhone, setPhone] = useState("");
  const [agentLocation, setLocation] = useState("");
  const [agentEmail, setEmail] = useState("");
  const [agentPassword, setPassword] = useState("");
  const { createNewUser, setLoading, loading } = useContext(AuthContext);
  const userType = "Agent";
  const navigate = useNavigate();

  const handleAddNewAgent = (e) => {
    e.preventDefault();
    try {
      const agentInfoObj = {
        name: agentName,
        phoneNo: agentPhone,
        opLocation: agentLocation,
        email: agentEmail,
        inital_pass: agentPassword,
        user_type: userType,
      };

      createNewUser(agentEmail, agentPassword)
        .then((response) => {
          setLoading(false);
          console.log(response.user);

          fetch(`http://localhost:5000/adduser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(agentInfoObj),
          })
            .then((response) => response.json())
            .then((_id) => {
              if (_id.acknowledged) {
                alert("User Added to Database");
              } else {
                alert("Databse Error!");
              }
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });

      //console.log(agentInfo);
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <div className=" flex flex-col">
      <div className=" text-center font-bold text-xl">
        <h2>Add New Agent</h2>
      </div>
      <div className=" my-5 flex flex-col px-2 gap-2 w-[420px]">
        <form onSubmit={(e) => handleAddNewAgent(e)}>
          <InputField
            title={"Agent Name"}
            width={600}
            placeholder={"e.g John"}
            onChangeFn={setAgentName}
          />
          <InputField
            title={"Agent Phone No"}
            width={600}
            placeholder={"e.g 016XXXXXXXX"}
            onChangeFn={setPhone}
          />
          <InputField
            title={"Agent Email"}
            width={600}
            placeholder={"e.g john@gmail.com"}
            onChangeFn={setEmail}
          />
          <InputField
            title={"Operating Location"}
            width={600}
            placeholder={"e.g Mohammadpur"}
            onChangeFn={setLocation}
          />
          <InputField
            title={"Initial Password"}
            width={600}
            placeholder={"6 digit inital password"}
            onChangeFn={setPassword}
          />
          {loading ? (
            <CustomLoader />
          ) : (
            <CustomButton
              title={"Add Agent"}
              type={"submit"}
              btnFn={() => {}}
            />
          )}
        </form>
        <CustomButton
          title={"Home"}
          btnFn={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default AddAgent;
