import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("userItem");
    navigate("/login");
  };

  return (
    <>
      <div className="w-full text-gray-700 bg-white shadow-md dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 text-center">
            <Link
              to="home"
              className="text-lg font-semibold tracking-widest cursor-pointer text-gray-900 rounded-lg "
            >
              Role Management
            </Link>
          </div>
          <nav className="flex-col flex-grow text-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <Link
              to="users"
              className="px-4 py-2 mt-2 text-sm cursor-pointer font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              User
            </Link>
            <Link
              to="dashboard"
              className="px-4 py-2 mt-2 text-sm cursor-pointer font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Dashboard
            </Link>
            <Link
              to="about"
              className="px-4 py-2 mt-2 text-sm cursor-pointer font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              About
            </Link>

            {!sessionStorage.getItem("userItem") ? (
              <Link
                to="login"
                className="px-4 py-2 mt-2 text-sm cursor-pointer font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={logout}
                className="px-4 py-2 mt-2 text-sm cursor-pointer font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
