import React, { useState } from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import CustomModal from "../components/CustomModal";

const SocialMedia = () => {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { new_rest_ID } = state;

  const handleAddContacts = (event) => {
    event.preventDefault();
    const contact = {
      rest_ID: new_rest_ID,
      phone: phone,
      email: email,
      facebook: facebook,
      instagram: instagram,
    };
    fetch("https://check-out-express-server.vercel.app/addsocial", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((finalize) => {
        if (finalize.acknowledged) {
          setOpenModal(true);
        }
      });
    event.target.reset();
  };
  return (
    <>
      <div className=" flex flex-col">
        <p className=" font-bold text-xl text-center py-2">
          Social Media Links & Contacts
        </p>
        <div className=" w-full">
          <form onSubmit={(e) => handleAddContacts(e)}>
            <InputField
              title={"Phone Number"}
              width={600}
              onChangeFn={setPhone}
              placeholder={"e.g 019XXXXXXX"}
            />
            <InputField
              title={"Facebook"}
              width={600}
              onChangeFn={setFacebook}
              placeholder={"Facebook page link"}
            />
            <InputField
              title={"Instagram"}
              width={600}
              onChangeFn={setInstagram}
              placeholder={"Instagram page link"}
            />
            <InputField
              title={"Email"}
              width={600}
              onChangeFn={setEmail}
              placeholder={"Email page link"}
            />
            <CustomButton
              title={"Add Contact Info"}
              type={"submit"}
              btnFn={() => {}}
            />
          </form>
        </div>
      </div>
      <CustomModal isVisible={openModal} closeFn={() => setOpenModal(false)}>
        <div className=" flex flex-col items-center">
          <h2>Thank you for your contribution</h2>
          <CustomButton
            title={"OK"}
            btnFn={() => {
              setOpenModal(false);
              navigate("/");
            }}
          />
        </div>
      </CustomModal>
    </>
  );
};

export default SocialMedia;
