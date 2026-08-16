import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ username, email, password });
  }
  return (
    <div id="register-page">
      <form action="" id="register-form" onSubmit={handleSubmit}>
        <input type="text" name="username" id="" placeholder="USERNAME" />
        <input type="text" name="email" id="" placeholder="EMAIL" />
        <input type="password" name="password" id="" placeholder="PASSWORD" />
        <button type="submit">REGISTER</button>
        <Link to="/login">LOGIN</Link>
      </form>
    </div>
  );
}

export default Register;
