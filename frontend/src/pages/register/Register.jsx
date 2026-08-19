import "./Register.css";

function Register() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ username, email, password });

    const result = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
      credentials: "include",
    });
    const data = await result.json();
    console.log(data);
  }
  return (
    <>
      <div id="register-page">
        <form action="" id="register-form" onSubmit={handleSubmit}>
          <input type="text" name="username" id="" placeholder="USERNAME" />
          <input type="text" name="email" id="" placeholder="EMAIL" />
          <input type="password" name="password" id="" placeholder="PASSWORD" />
          <button type="submit">REGISTER</button>
        </form>
      </div>
    </>
  );
}

export default Register;
