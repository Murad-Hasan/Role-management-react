import React, { useEffect, useState } from "react";
import getUserData from "../../services/users/UserData";
import Modals from "../utilities/Modals";
import UserSummary from "./UserSummary";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "Assign Role",
    editUserId: "",
    isEdit: false,
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const assignRole = () => {
    setModalInfo({
      title: "Assign Role",
      editUserId: null,
      isEdit: false,
    });
    togglePopup();
  };
  
  const onSubmitAssignRole = (data) => {
    let user = users.find((user) => user.id == data.id);
    user.role = data.role;
    let filteredUsers = users.filter((user) => user.id != data.id);
    setUsers([...filteredUsers, user]);
  };

  useEffect(() => {
    const users = getUserData();
    setUsers(users);
  }, [setUsers]);

  const deleteUser = (e, id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUserInfo = (e, user) => {
    if (e.target.id == "edit") {
      setModalInfo({
        title: "Edit User",
        editUserId: user.id,
        isEdit: true,
      });
      togglePopup();
    } else if (e.target.id == "delete") {
      deleteUser(e, user.id);
    }
  };

  return (
    <section>
      <div
        id="main"
        className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r flex justify-between items-center from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">User List</h1>
            <Modals
              onSubmit={onSubmitAssignRole}
              isOpen={isOpen}
              togglePopup={togglePopup}
              modalInfo={modalInfo}
              assignRole={assignRole}
            />
          </div>
        </div>
        <UserSummary />
        <div className="container mx-auto">
          <div
            id="recipients"
            className="p-8 mt-6 lg:mt-0 rounded shadow bg-white"
          >
            <table
              id="example"
              className="hover border-collapse border border-gray-400"
              style={{
                width: "100%",
                paddingTop: "1em",
                paddingBottom: "1em",
              }}
            >
              <thead>
                <tr className="hover:bg-gray-100">
                  <th className="border border-gray-300" data-priority="1">
                    No
                  </th>
                  <th className="border border-gray-300" data-priority="2">
                    Name
                  </th>
                  <th className="border border-gray-300" data-priority="3">
                    User Name
                  </th>
                  <th className="border border-gray-300" data-priority="4">
                    Role
                  </th>
                  <th className="border border-gray-300" data-priority="5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user, index) => {
                    if (index % 2 === 0) {
                      return (
                        <tr key={index} className="text-center bg-gray-100">
                          <td className="border border-gray-300">
                            {index + 1}
                          </td>
                          <td className="border border-gray-300">
                            {user.name}
                          </td>
                          <td className="border border-gray-300">
                            {user.userName}
                          </td>
                          <td className="border border-gray-300">
                            {user.role ? user.role : "---"}
                          </td>
                          <td className="border border-gray-300">
                            <button
                              id="edit"
                              onClick={(e) => editUserInfo(e, user)}
                              className="bg-yellow-500 p-2 rounded"
                            >
                              Edit
                            </button>
                            <button
                              id="delete"
                              onClick={(e) => deleteUser(e, user.id)}
                              className="bg-red-700 hover:bg-red-900 p-2 rounded ml-1 text-white"
                            >
                              Delate
                            </button>
                          </td>
                        </tr>
                      );
                    }
                    if (index % 2 === 1) {
                      return (
                        <tr
                          key={index}
                          className="text-center hover:bg-gray-100"
                        >
                          <td className="border border-gray-300">
                            {index + 1}
                          </td>
                          <td className="border border-gray-300">
                            {user.name}
                          </td>
                          <td className="border border-gray-300">
                            {user.userName}
                          </td>
                          <td className="border border-gray-300">
                            {user.role ? user.role : "---"}
                          </td>
                          <td className="border border-gray-300">
                            <button
                              id="edit"
                              onClick={(e) => editUserInfo(e, user)}
                              className="bg-yellow-500 p-2 rounded"
                            >
                              Edit
                            </button>
                            <button
                              id="delete"
                              onClick={(e) => deleteUser(e, user.id)}
                              className="bg-red-700 hover:bg-red-900 p-2 rounded ml-1 text-white"
                            >
                              Delate
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  })}
                {users.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No data found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
