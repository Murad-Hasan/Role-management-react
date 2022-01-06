import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import Login from "./components/auth/Login";
import Login from "./components/auth/Login";
import Header from "./components/partials/Header";
import User from "./views/users/User";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="users" element={<User />} />
        <Route path="home" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
