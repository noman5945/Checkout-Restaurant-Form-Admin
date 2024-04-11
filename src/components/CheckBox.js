import React from "react";

const CheckBox = ({ label, value, chngFn }) => {
  return (
    <div className="w-[200px]">
      <label className=" font-semibold">
        <input
          type="checkbox"
          value={value ? value : ""}
          className={` mx-2 text-red-500 cursor-pointer`}
          onChange={(e) => chngFn(e)}
        />
        {label ? label : "Pass label and value"}
      </label>
    </div>
  );
};

export default CheckBox;
