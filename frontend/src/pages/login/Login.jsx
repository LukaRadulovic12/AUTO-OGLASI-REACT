import { useState } from "react";
import "./Login.css";
import LoginImage from "../../assets/images/2023-porsche-911-gt3-rs-1080.jpg"

function Login() {
  const [error, setError] = useState(null)
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ username, password });

    const result = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });
    const data = await result.json();
    console.log(data);
    if (result.status === 401) {
      setError(data.error)
    }
  }
  return (
    <>
      <div id="login-page">
        <div id="login-image-container">
          <img src={LoginImage} alt="" />
        </div>
        <form action="" id="login-form" onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <input type="text" name="username" id="" placeholder="USERNAME" />
          <input type="password" name="password" id="" placeholder="PASSWORD" />
          <button type="submit">LOGIN</button>
          {error && <p className="errorMessage">{error}</p>}
        </form>
      </div>
    </>
  );
}

export default Login;
