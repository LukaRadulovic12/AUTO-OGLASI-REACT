import { useState } from "react";
import "./Register.css";
import RegisterImage from "../../assets/images/2023-porsche-911-gt3-rs-1080.jpg";

function Register() {
  const [error, setError] = useState(null);
  const [isUsernameFree, setIsUsernameFree] = useState(true);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const result = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
      credentials: "include",
    });
    const data = await result.json();
    console.log(data);
    if (result.status >= 400 && result.status < 500) {
      setError(data.error);
    }
  }
  async function handleChange(event) {
    // state koji ce sadrzati setTimeout funkciju
    // na svaki klik se resetuje timeout
  }
  return (
    <>
      <div id="register-page">
        <div id="register-image-container">
          <img src={RegisterImage} alt="" />
        </div>
        <form action="" id="register-form" onSubmit={handleSubmit}>
          <h2>REGISTER</h2>
          <input type="text" name="username" id="" placeholder="USERNAME" onChange={handleChange}/>
          {!isUsernameFree && <p className="errorMessage">USERNAME IS TAKEN</p>}
          <input type="text" name="email" id="" placeholder="EMAIL" />
          <input type="password" name="password" id="" placeholder="PASSWORD" />
          <button type="submit">REGISTER</button>
          {error && <p className="errorMessage">{error}</p>}
        </form>
      </div>
    </>
  );
}

export default Register;
