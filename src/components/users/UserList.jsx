import React from "react";
import getUserData from "../../services/users/UserData";

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
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            {/*Metric Card*/}
            <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-green-600">
                    <i className="fas fa-user-shield fa-2x fa-inverse" />
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">
                    Total Admin
                  </h2>
                  <p className="font-bold text-3xl">{admin.length}</p>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            {/*Metric Card*/}
            <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-pink-600">
                    <i className="fas fa-users fa-2x fa-inverse" />
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">
                    Total Users
                  </h2>
                  <p className="font-bold text-3xl">
                    {userData.length}{" "}
                    <span className="text-pink-500">
                      <i className="fas fa-exchange-alt" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            {/*Metric Card*/}
            <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-yellow-600">
                    <i className="fas fa-user-plus fa-2x fa-inverse" />
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">
                    New Users
                  </h2>
                  <p className="font-bold text-3xl">
                    {users.length}{" "}
                    <span className="text-yellow-600">
                      <i className="fas fa-caret-up" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            {/*Metric Card*/}
            <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-blue-600">
                    <i className="fas fa-server fa-2x fa-inverse" />
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">
                    Moderator
                  </h2>
                  <p className="font-bold text-3xl">{moderator.length}</p>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            {/*Metric Card*/}
            <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-indigo-600">
                    <i className="fas fa-tasks fa-2x fa-inverse" />
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">
                    Male User
                  </h2>
                  <p className="font-bold text-3xl">{maleUser.length}</p>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            {/*Metric Card*/}
            <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-red-600">
                    <i className="fas fa-inbox fa-2x fa-inverse" />
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">
                    Female User
                  </h2>
                  <p className="font-bold text-3xl">
                    {femaleUser.length}
                    {/* <span className="text-red-500">
                      <i className="fas fa-caret-up" />
                    </span> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <th data-priority="4">Email</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => {
                  return (
                    <tr
                      key={index}
                      className="text-center border border-gray-200"
                    >
                      <td>{user.name}</td>
                      <td>{user.userName}</td>
                      <td>{user.role}</td>
                      <td>{user.email ? user.email : "Null"}</td>
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
