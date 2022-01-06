// import React, { useState } from "react";
// import checkLogin from "../../services/auth/LoginService";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const Login2 = () => {
//   let navigate = useNavigate();

//   const initialValues = {
//     userName: "",
//     password: "",
//     error: "",
//     justLogin: false,
//   };

//   const [userInfo, setUserInfo] = useState({ initialValues });

//   const changeUserName = (e) => {
//     setUserInfo({
//       ...userInfo,
//       userName: e.target.value,
//     });
//   };

//   const userPassword = (e) => {
//     setUserInfo({
//       ...userInfo,
//       password: e.target.value,
//     });
//   };

//   const submitLogin = (e) => {
//     e.preventDefault();
//     if (checkLogin(userInfo)) {
//       setUserInfo({
//         userName: "",
//         password: "",
//         error: "",
//       });
//       sessionStorage.setItem("userItem", JSON.stringify(userInfo));
//       navigate("/users");
//     } else {
//       setUserInfo({
//         error: "Invalid Username or Password",
//       });
//     }
//   };

//   const Year = new Date().getFullYear();
//   return (
//     <div className="h-[80vh] grid items-center">
//       <div className="flex items-center justify-center">
//         <div className="w-full max-w-md">
//           <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
//             <div className="text-gray-800 text-2xl flex justify-center border-b-2 border-b-slate-400 py-2 mb-4">
//               LogIn
//             </div>

//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-normal mb-2"
//                 htmlFor="username"
//               >
//                 Username
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-1 focus:border-teal-400"
//                 name="username"
//                 v-model="form.username"
//                 type="text"
//                 value={userInfo.userName}
//                 onChange={changeUserName}
//                 required
//                 autoFocus
//                 placeholder="Username"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 className="block text-gray-700 text-sm font-normal mb-2"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-1 focus:border-teal-400"
//                 v-model="form.password"
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={userInfo.password}
//                 onChange={userPassword}
//                 required
//                 autoComplete="current-password"
//               />
//               {userInfo.error && (
//                 <div className="text-red-500 text-sm text-center">
//                   {userInfo.error}
//                 </div>
//               )}
//             </div>

//             <div className="flex items-center justify-between">
//               <button
//                 className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-95"
//                 type="submit"
//                 onClick={submitLogin}
//               >
//                 LogIn
//               </button>
//               <ToastContainer
//                 position="top-right"
//                 autoClose={1500}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="colored"
//               />
//               <a
//                 className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
//                 href="#"
//               >
//                 Forgot Password?
//               </a>
//             </div>
//           </form>
//           <p className="text-center text-gray-500 text-xs">
//             &copy;{Year} Murad Hasan. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login2;
