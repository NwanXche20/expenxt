import React from "react";

const AlertBar = () => {
  return (
    <div className="alert-container">
      <div className="alert">
        <p className="alert-text">You've added an item to the list</p>
        <button className="alert-btn">X</button>
      </div>
    </div>
  );
};

export default AlertBar;
