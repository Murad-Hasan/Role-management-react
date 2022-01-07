import React from "react";
import Sidebar from "../../components/partials/Sidebar";

const PermissionContainer = () => {
  return (
    <>
      <section className="bg-gray-800 font-sans leading-normal tracking-normal">
        {/* nav here */}
        <main>
          <div className="flex flex-col md:flex-row">
            <Sidebar />
            <h2 className="text-white">permission</h2>
          </div>
        </main>
      </section>
    </>
  );
};

export default PermissionContainer;