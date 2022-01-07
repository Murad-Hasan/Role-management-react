import React from "react";
import getUserData from "../../services/users/UserData";
import UserSummary from "./UserSummary";

const UserList = () => {
  const userData = getUserData();
  let admin = [];
  let users = [];
  let moderator = [];
  let maleUser = [];
  let femaleUser = [];
  userData.filter((user) => {
    if (user.role === "admin") {
      admin.push(user);
    }
    if (user.role === "user") {
      users.push(user);
    }
    if (user.role === "moderator") {
      moderator.push(user);
    }
    if (user.gender === "male") {
      maleUser.push(user);
    }
    if (user.gender === "Female") {
      femaleUser.push(user);
    }
  });
  return (
    <section>
      <div
        id="main"
        className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">UserList</h1>
          </div>
        </div>
        <UserSummary
          userData={userData}
          admin={admin}
          users={users}
          moderator={moderator}
          maleUser={maleUser}
          femaleUser={femaleUser}
        />
        <div className="container mx-auto">
          <div
            id="recipients"
            className="p-8 mt-6 lg:mt-0 rounded shadow bg-white"
          >
            <table
              id="example"
              className="stripe hover"
              style={{
                width: "100%",
                paddingTop: "1em",
                paddingBottom: "1em",
              }}
            >
              <thead>
                <tr>
                  <th data-priority="1">Name</th>
                  <th data-priority="2">User Name</th>
                  <th data-priority="3">Role</th>
                  <th data-priority="4">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length > 0 &&
                  userData.map((user, index) => {
                    return (
                      <tr
                        key={index}
                        className="text-center border border-gray-200"
                      >
                        <td>{user.name}</td>
                        <td>{user.userName}</td>
                        <td>{user.role ? user.role : "---"}</td>
                        <td>
                          <button className="bg-yellow-500 p-2 rounded">
                            Edit
                          </button>
                          <button className="bg-red-700 p-2 rounded ml-1 text-white">
                            Delate
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
