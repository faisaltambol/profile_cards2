import React, { useState } from "react";
import CommonModal from "./CommonModal";

export default function CommonCards({id, userName, userEmail,name,phone }) {
  const [isModalOpen, setIsModalOpen] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    {isModalOpen === true ? (
      <CommonModal
       handleCloseModal={handleCloseModal}
       userName={userName}
       userEmail={userEmail}
       phone={phone}
       id={id}
       name={name}
       />
    ) : null}
      <div
        style={{
          borderRadius: "10px",
          width: "17%",
          height: "310px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div>
          <img
            src={`https://robohash.org/${id}?200x200`}
            alt="robotsImage"
            style={{ width: "100%" }}
          />
        </div>
        <div>{id}</div>
        <div>{userName}</div>
        <div>{userEmail}</div>
        <button onClick={handleOpenModal} style={{direction:"bottom",padding:"8 px"}}>Show details</button>
      </div>
    </>
  );
}