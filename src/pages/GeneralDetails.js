import React, { useState } from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import CheckBox from "../components/CheckBox";
import { Features, FoodTypes } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const GeneralDetails = () => {
  const [restName, setRestName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [location, setLocation] = useState("");
  const [lowestPrice, setLowestPrice] = useState("");
  const [highestPrice, setHighestPrice] = useState("");
  const [rating, setRating] = useState("");
  const [workTime, setWorkTime] = useState("");
  const [features, setFeatures] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);
  const navigate = useNavigate();

  const handlePost = (event) => {
    event.preventDefault();
    try {
      const lowestPriceInt = parseInt(lowestPrice);
      const highestPriceInt = parseInt(highestPrice);
      const resturauntInfo = {
        name: restName,
        location: location,
        opening: startTime,
        closing: closeTime,
        lowestPrice: lowestPriceInt,
        highestPrice: highestPriceInt,
        ratings: rating,
        features: features,
        mainFoods: foodTypes,
        workTime: workTime,
      };
      fetch("https://check-out-express-server.vercel.app/addrestaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resturauntInfo),
      })
        .then((response) => response.json())
        .then((_id) => {
          if (_id.acknowledged) {
            navigate("/foodmenu", { state: { new_rest_ID: _id.insertedId } });
          }
        });
    } catch (error) {
      console.log(error);
    }

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

  const handleFoodCheckbox = (event) => {
    if (event.target.checked) {
      setFoodTypes([...foodTypes, event.target.value.toString()]);
    } else {
      const removedFoodType = foodTypes.filter(
        (foodtype) => foodtype !== event.target.value.toString()
      );
      setFoodTypes(removedFoodType);
    }
  };

  return (
    <div className=" my-5 flex flex-col px-2 gap-2">
      <div className=" text-center font-bold text-xl">
        <h2>General Information</h2>
      </div>
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
        <InputField
          title={"Working Time"}
          width={600}
          onChangeFn={setWorkTime}
          placeholder={"e.g Day or Night"}
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
            {Features.map((feature, index) => (
              <CheckBox
                key={index}
                label={feature.label}
                value={feature.value}
                chngFn={handleCheckbox}
              ></CheckBox>
            ))}
          </div>
        </div>
        <div className=" flex flex-col items-start">
          <div className=" text-start font-bold p-2">
            <p>Popular Food Types:</p>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2">
            {FoodTypes.map((foodtype, index) => (
              <CheckBox
                key={index}
                label={foodtype.label}
                value={foodtype.value}
                chngFn={handleFoodCheckbox}
              ></CheckBox>
            ))}
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
