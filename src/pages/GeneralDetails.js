import React, { useState } from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import CheckBox from "../components/CheckBox";

const GeneralDetails = () => {
  const [restName, setRestName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [location, setLocation] = useState("");
  const [lowestPrice, setLowestPrice] = useState("");
  const [highestPrice, setHighestPrice] = useState("");
  const [rating, setRating] = useState("");
  const [features, setFeatures] = useState([]);
  const handlePost = (event) => {
    event.preventDefault();
    const resturauntInfo = {
      name: restName,
      location: location,
      opening: startTime,
      closing: closeTime,
      lowestPrice: lowestPrice,
      highestPrice: highestPrice,
      ratings: rating,
      features: features,
    };

    console.log(resturauntInfo);
    event.target.reset();
  };

  const handleCheckbox = (event) => {
    if (event.target.checked) {
      setFeatures([...features, event.target.value.toString()]);
    } else {
      const removedFeatures = features.filter(
        (feature) => feature !== event.target.value.toString()
      );
      setFeatures(removedFeatures);
    }
    //console.log(features);
  };

  return (
    <div className=" my-5 flex flex-col px-2 gap-2">
      <form onSubmit={(e) => handlePost(e)}>
        <InputField
          title={"Restaurant Name"}
          placeholder={"e.g Kudos"}
          width={600}
          onChangeFn={setRestName}
        />
        <InputField
          title={"Location"}
          width={600}
          onChangeFn={setLocation}
          placeholder={"e.g Mohammadpur"}
        />
        <div className=" flex flex-row gap-3">
          <InputField
            title={"Open time"}
            placeholder={"e.g 10 AM"}
            width={10}
            onChangeFn={setStartTime}
          />
          <InputField
            title={"Closing time"}
            placeholder={"e.g 11 PM"}
            width={10}
            onChangeFn={setCloseTime}
          />
        </div>
        <div className=" flex flex-row gap-3">
          <InputField
            title={"Lowest food price"}
            placeholder={"e.g 400 Tk"}
            width={10}
            onChangeFn={setLowestPrice}
          />
          <InputField
            title={"Highest food price"}
            placeholder={"e.g 1200 Tk"}
            width={10}
            onChangeFn={setHighestPrice}
          />
        </div>
        <InputField
          title={"Current Rating"}
          placeholder={"e.g 4.5"}
          width={10}
          onChangeFn={setRating}
        />
        <div className=" flex flex-col items-start">
          <div className=" text-start font-bold p-2">
            <p>Features and Services:</p>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2">
            <CheckBox
              label={"New thang"}
              value={"whhof1"}
              chngFn={handleCheckbox}
            ></CheckBox>
            <CheckBox
              label={"New thang"}
              value={"whhof2"}
              chngFn={handleCheckbox}
            ></CheckBox>
          </div>
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
