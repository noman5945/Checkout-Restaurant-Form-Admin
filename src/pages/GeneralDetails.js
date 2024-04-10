import React, { useState } from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";

const GeneralDetails = () => {
  const [restName, setRestName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [location, setLocation] = useState("");
  const handlePost = (event) => {
    event.preventDefault();
    const resturauntInfo = {
      name: restName,
      location: location,
      opening: startTime,
      closing: closeTime,
    };

    console.log(resturauntInfo);
  };
  return (
    <div className=" my-5 flex flex-col px-2">
      <form onSubmit={(e) => handlePost(e)}>
        <InputField
          title={"Resturent Name"}
          width={600}
          onChangeFn={setRestName}
        />
        <InputField title={"Location"} width={600} onChangeFn={setLocation} />
        <div className=" flex flex-row gap-3">
          <InputField
            title={"Open time"}
            width={10}
            onChangeFn={setStartTime}
          />
          <InputField
            title={"Closing time"}
            width={10}
            onChangeFn={setCloseTime}
          />
        </div>
        <CustomButton
          title={"Add Resturaunt"}
          type={"submit"}
          btnFn={() => {}}
        />
      </form>
    </div>
  );
};

export default GeneralDetails;
