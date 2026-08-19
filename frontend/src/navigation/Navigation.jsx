import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <h1>DOBRODOSLI NA AUTO OGLASE REACT</h1>
      </Link>
      <Link to="/register">
        <h1>REGISTER</h1>
      </Link>
      <Link to="/login">
        <h1>LOGIN</h1>
      </Link>
    </nav>
  );
}

export default Navigation;
