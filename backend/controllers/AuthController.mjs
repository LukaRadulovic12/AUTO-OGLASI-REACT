import UserQueries from "../database/userQueries.mjs";
import crypto from "crypto";
import SessionQueries from "../database/sessionQueries.mjs";
import { hashPassword, verifyPassword } from "../utils/security.mjs";
import validateUser from "../validators/userValidator.mjs";

class AuthController {
  static async register(username, email, password) {
    validateUser(username, password);

    const hashedPassword = await hashPassword(password);

    const user = await UserQueries.createUser(username, email, hashedPassword);

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
  static async login(username, password) {
    const user = await UserQueries.getUser(username);

    if (!user) {
      console.log("BAD USERNAME OR PASSWORD");
      return new Error("BAD USERNAME OR PASSWORD");
    }

    const validPassword = await verifyPassword(password, user.password);

    if (!validPassword) {
      console.log("BAD USERNAME OR PASSWORD");
      return new Error("BAD USERNAME OR PASSWORD");
    }

    const token = crypto.randomBytes(32).toString("hex");

    const session = await SessionQueries.createSession(
      user.id,
      token,
      username,
    );

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      token,
    };
  }
  static async isUsernameFree(username) {
    const result = await UserQueries.isUsernameFree(username);
    if (result.length === 0) {
      return true;
    }
    return false;
  }
}

export default AuthController;
