import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Navigation from "./navigation/Navigation.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
