import React from "react";
import AssignRole from "../users/AssignRole";

import PopUp from "./PopUp";

const Modals = ({ togglePopup, isOpen, onSubmit}) => {
  return (
    <div>
      <button
        className="px-2 py-1 shadow-violet-50 text-black font-medium active:scale-95 bg-green-500 rounded-md"
        onClick={togglePopup}
      >
        Assign Role
      </button>
      {isOpen && (
        <PopUp
          content={<AssignRole togglePopup={togglePopup} onSubmit={onSubmit} />}
          togglePopup={togglePopup}
        />
      )}
    </div>
  );
};

export default Modals;
