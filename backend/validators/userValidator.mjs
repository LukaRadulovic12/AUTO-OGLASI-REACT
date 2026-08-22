function validateUser(username, password) {
  if (username.length < 8) {
    const usernameLengthError = new Error(
      "Username should contain atleast 8 charachers",
    );
    usernameLengthError.code = "SHORT_USERNAME";
    throw usernameLengthError;
  }
  if (password.length < 8) {
    const passwordLengthError = new Error(
      "Password should contain atleast 8 charachers",
    );
    passwordLengthError.code = "SHORT_PASSWORD";
    throw passwordLengthError;
  }
  if (!/\d/.test(password)) {
    const passwordNumberContainError = new Error(
      "Password should contain atleast 1 number",
    );
    passwordNumberContainError.code = "NO_NUMBERS_PASSWORD";
    throw passwordNumberContainError;
  }
}

export default validateUser;
