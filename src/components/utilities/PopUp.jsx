import React from "react";
import "../../assets/css/PopUp.css";
const PopUp = ({ content}) => {
  return (
    <div className="popup-box">
      <div className="box-wrapper">
        <div className="box">
          {content}
          
        </div>
      </div>
    </div>
  );
};

export default PopUp;
