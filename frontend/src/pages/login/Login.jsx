import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ username, password });
  }
  return (
    <div id="login-page">
      <form action="" id="login-form" onSubmit={handleSubmit}>
        <input type="text" name="username" id="" placeholder="USERNAME" />
        <input type="password" name="password" id="" placeholder="PASSWORD" />
        <button type="submit">LOGIN</button>
        <Link to="/register">REGISTER</Link>
      </form>
    </div>
  );
}

export default Login;
