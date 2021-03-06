import React from "react";
import Sidebar from "../../components/partials/Sidebar";
import UserList from "../../components/users/UserList";

const UserContainer = () => {
  return (
    <>
      <section className="bg-gray-800 font-sans leading-normal tracking-normal">
        {/* nav here */}
        <main>
          <div className="flex flex-col md:flex-row">
            <Sidebar />
            <UserList />
          </div>
        </main>
      </section>
    </>
  );
};

export default UserContainer;
