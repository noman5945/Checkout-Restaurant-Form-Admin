import React, { useEffect, useState } from "react";
import CustomTable from "../components/CustomTable";
import CustomLoader from "../components/CustomLoader";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setLoader(true);
    fetch("http://localhost:5000/get-all-users")
      .then((response) => response.json())
      .then((resData) => {
        setLoader(false);
        setData(resData);
      });
  }, []);
  return (
    <div className=" flex flex-col items-center p-3">
      <div className=" text-center font-bold text-lg">
        List of All Users(Admin,Agent,Regular)
      </div>
      {loader ? (
        <CustomLoader />
      ) : (
        <div className="relative overflow-x-auto">
          <CustomTable tData={data} />
        </div>
      )}
      <CustomButton
        title={"Home"}
        btnFn={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default AllUsers;
