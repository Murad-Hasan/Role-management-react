import React, { useState } from "react";
import getUserData from "../../services/users/UserData";
import getRoleMasterData from "../../services/roles/RoleMasterData.js";

const AssignRole = ({ togglePopup, onSubmit}) => {
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
    if (user === "" || role == "") {
      alert("Please select a user and role");
      return false;
    } else {
      const userData = JSON.parse(user);
      const roleData = JSON.parse(role);
      let data = {
        id: Math.floor(Math.random() * 1000),
        userName: userData.userName,
        name: userData.name,
        password: userData.password,
        role: roleData.name,
        email: userData.email,
        gender: userData.gender,
      };
      onSubmit(data);
      togglePopup();
    }
    alert("congratulations, Role Assigned");
  };
  return (
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
                {users.map((user, index) => {
                  if (user.role === "" || user.role === null) {
                    return (
                      <option value={JSON.stringify(user)} key={index}>
                        {user.name}
                      </option>
                    );
                  }
                })}
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
            type="submit"
            onClick={togglePopup}
            className="px-2 py-1 ml-2 shadow-violet-50  font-medium active:scale-95 bg-red-400 rounded-md"
          >
            close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignRole;
