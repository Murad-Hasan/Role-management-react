import React from "react";
import { Link, useLocation } from "react-router-dom";
import getSidebarData from "./sidebarData";

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const sidebarInfo = getSidebarData();

  return (
    <nav aria-label="alternative nav">
      <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
        <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
          <ul className="list-reset flex flex-row md:flex-col mt-4 md:py-3 px-1 md:px-2 text-center md:text-left">
            {sidebarInfo.map((sidebar, index) => {
              const { name, pathUrl, icon } = sidebar;
              return (
                <li
                  key={index}
                  className={` mr-3 flex-1 block py-1 md:py-3 pl-1 align-middle text-white ${
                    pathname == pathUrl ? "bg-blue-600 rounded" : ""
                  }`}
                >
                  <Link to={pathUrl}>
                    <p>
                      <i className={`${icon} pr-0 md:pr-3`}></i>
                      <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        {name}
                      </span>
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
