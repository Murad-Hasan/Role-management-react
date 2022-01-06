import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Header from "./components/partials/Header";
import User from "./views/users/User";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="home" element={<Login />} />
        <Route path="user" element={<User />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
