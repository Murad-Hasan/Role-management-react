import React from "react";
import getUserData from "../../services/users/UserData";
import UserSummary from "./UserSummary";
import swal from "sweetalert2/dist/sweetalert2.all.min.js";

const UserList = () => {
  const userData = getUserData();
  const openModal = () => {
    swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
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
            <button
              onClick={openModal}
              className="p-3 bg-green-500 rounded-md shadow-md shadow-blue-900 active:scale-95"
            >
              {" "}
              <i className="fas fa-plus"></i> Assign Role
            </button>
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
                {userData.length > 0 &&
                  userData.map((user, index) => {
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
                            <button className="bg-yellow-500 p-2 rounded">
                              Edit
                            </button>
                            <button className="bg-red-700 p-2 rounded ml-1 text-white">
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
                            <button className="bg-yellow-500 p-2 rounded">
                              Edit
                            </button>
                            <button className="bg-red-700 p-2 rounded ml-1 text-white">
                              Delate
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  })}
                {userData.length === 0 && (
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
