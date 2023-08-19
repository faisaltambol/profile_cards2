import React from "react";

export default function CommonModal({ handleCloseModal, userName, userEmail, id,name, phone}) {
  const onClose = () => {
    handleCloseModal();
  };

  return (
    <div className="App">
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">
            <img src={`https://robohash.org/${id}?200x200`} alt="robotsImage" style={{ width: "100%" }} />
            
            <p>{userName}</p>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{userEmail}</p>
            
            
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}