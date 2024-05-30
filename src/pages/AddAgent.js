import React, { useContext, useState } from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../Providers/AuthProvider";
import CustomLoader from "../components/CustomLoader";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const AddAgent = () => {
  const [agentName, setAgentName] = useState("");
  const [agentPhone, setPhone] = useState("");
  const [agentLocation, setLocation] = useState("");
  const [agentEmail, setEmail] = useState("");
  const [agentPassword, setPassword] = useState("");
  const { createNewUser, setLoading, loading } = useContext(AuthContext);
  const userType = "Agent";
  const navigate = useNavigate();

  const service_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_ID = process.env.REACT_APP_EMAILJS_AGENT_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

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

      const emailParams = {
        to_email: agentEmail,
        to_name: agentName,
        from_name: "checkout-admin",
        message: `Your account has been created and this is your password ${agentPassword}`,
      };

      createNewUser(agentEmail, agentPassword)
        .then((response) => {
          setLoading(false);

          fetch(`https://check-out-express-server.vercel.app/adduser`, {
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
                emailjs
                  .send(service_ID, template_ID, emailParams, public_key)
                  .then(
                    (response) => {
                      alert(
                        "SUCCESS! Email Sent",
                        response.status,
                        response.text
                      );
                    },
                    (error) => {
                      console.log("FAILED...", error);
                    }
                  );
              } else {
                alert("Databse Error!");
              }
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + " " + errorMessage);
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
