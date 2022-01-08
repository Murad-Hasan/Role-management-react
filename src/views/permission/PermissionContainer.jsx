import React from "react";
import Sidebar from "../../components/partials/Sidebar";
import PermissionList from "../../components/permissions/PermissionList";

const PermissionContainer = () => {
  return (
    <>
      <section className="bg-gray-800 font-sans leading-normal tracking-normal">
        {/* nav here */}
        <main>
          <div className="flex flex-col md:flex-row">
            <Sidebar />
            <PermissionList />
          </div>
        </main>
      </section>
    </>
  );
};

export default PermissionContainer;
