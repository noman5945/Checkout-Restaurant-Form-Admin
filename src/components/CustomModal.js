import React from "react";

const CustomModal = ({ isVisible, closeFn, children }) => {
  if (!isVisible) return null;

  const handleOuterClose = (e) => {
    if (e.target.id === "wrapper") {
      closeFn();
    }
  };
  return (
    <div
      className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleOuterClose}
    >
      <div className=" w-[600px] flex flex-col">
        <button
          onClick={closeFn}
          className=" text-white text-xl place-self-end"
        >
          X
        </button>
        <div className=" bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
