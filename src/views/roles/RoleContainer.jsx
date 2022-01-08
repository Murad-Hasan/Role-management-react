import React from "react";
import Sidebar from "../../components/partials/Sidebar";
import RoleList from "../../components/roles/RoleList";

const RoleContainer = () => {
  return (
    <>
      <section className="bg-gray-800 font-sans leading-normal tracking-normal">
        {/* nav here */}
        <main>
          <div className="flex flex-col md:flex-row">
            <Sidebar />
            <RoleList />
          </div>
        </main>
      </section>
    </>
  );
};

export default RoleContainer;
