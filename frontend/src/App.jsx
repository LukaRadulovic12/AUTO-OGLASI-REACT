import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Navigation from "./navigation/Navigation.jsx";
import HomepageImage from "./assets/images/2023-porsche-911-gt3-rs-1080.jpg";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <div id="homepage-image-container">
              <img src={HomepageImage} alt="" />
            </div>
            
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
