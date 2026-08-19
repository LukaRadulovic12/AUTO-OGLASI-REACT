import UserQueries from "../database/userQueries.mjs";
import crypto from "crypto";
import SessionQueries from "../database/sessionQueries.mjs";

class AuthController {
  static async register(username, email, password) {
    const user = await UserQueries.createUser(username, email, password);

    const userId = user.insertId;

    const token = crypto.randomBytes(32).toString("hex");

    const session = await SessionQueries.createSession(userId, token, username);

    return {
      id: userId,
      username,
      email,
      token,
    };
  }
}

export default AuthController;
