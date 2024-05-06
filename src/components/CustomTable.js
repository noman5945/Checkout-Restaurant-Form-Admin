import React from "react";
import CustomButton from "./CustomButton";

const CustomTable = ({ tData }) => {
  const tableData = tData;
  const firstData = tData[0];
  const headers = Object.keys(firstData);

  return (
    <table className="table-fixed border-separate border-spacing-3 border border-slate-500 ">
      <thead>
        <tr className="border border-black bg-slate-50">
          {headers.map((header, index) => {
            return <th key={index}>{header.toUpperCase()}</th>;
          })}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={data._id} className=" border border-black">
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.phoneNo}</td>
              <td>{data.opLocation}</td>
              <td>{data.email}</td>
              <td>{data.user_type}</td>
              <td>
                <CustomButton title={"Disable"} btnFn={() => {}} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomTable;
