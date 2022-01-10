import React, { useState } from "react";
import getRoleMasterData from "../../services/roles/RoleMasterData.js";
import getUserData from "../../services/users/UserData";
import PopUp from "./PopUp";

const Modals = ({ togglePopup, isOpen }) => {
  const users = getUserData();
  const roles = getRoleMasterData();

  const [user, setUser] = useState("");
  const [role, setRole] = useState("");

  const changeUser = (e) => {
    setUser(e.target.value);
  };
  const changeRole = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "" && role == "") {
      alert("Please select a user and role");
    } else {
      console.log("user" + user, "role" + role);
      togglePopup();
    }
  };

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
          content={
            <div className="text-black">
              <h2>Assign Role</h2>
              <hr />
              <form className="py-3">
                <div className="flex flex-col gap-2.5 flex-wrap lg:flex-row justify-around">
                  <div>
                    <label className="text-black">
                      <span className="text-black">Name: </span>
                      <select
                        value={user}
                        onChange={changeUser}
                        required
                        className="text-black border rounded-md outline-none border-slate-400 text-center"
                      >
                        <option value="Please Select a user">
                          Please Select a user
                        </option>
                        {users.map((user, index) => (
                          <option value={JSON.stringify(user)} key={index}>
                            {user.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div>
                    <label className="text-black">
                      <span className="text-black">Role: </span>
                      <select
                        value={role}
                        onChange={changeRole}
                        required
                        className="text-black border outline-none rounded-md border-slate-400 text-center"
                      >
                        <option value="Please select a role">
                          Please select a role
                        </option>
                        {roles.map((role, index) => (
                          <option value={JSON.stringify(role)} key={index}>
                            {role.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-2 py-1 shadow-violet-50  font-medium active:scale-95 bg-green-400 rounded-md"
                  >
                    Save
                  </button>
                  <button
                    onClick={togglePopup}
                    className="px-2 py-1 ml-3 shadow-violet-50  font-medium active:scale-95 bg-red-400 rounded-md"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          }
          togglePopup={togglePopup}
        />
      )}
    </div>
  );
};

export default Modals;
