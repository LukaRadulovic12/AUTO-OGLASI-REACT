import Database from "./database.mjs";

class UserQueries {
  static async createUser(username, email, password) {
    const dbInstance = Database.getInstance();

    const [result] = await dbInstance.connection.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password],
    );
    return result;
  }
  static async getUser(username) {
    const dbInstance = Database.getInstance();

    const [[result]] = await dbInstance.connection.execute(
      "SELECT * FROM users WHERE username = ?",
      [username],
    );

    return result;
  }
  static async isUsernameFree(username) {
    const dbInstance = Database.getInstance();

    const [result] = await dbInstance.connection.execute(
      "SELECT username FROM users WHERE username = ? LIMIT 1",
      [username],
    );
    console.log(result)
    return result;
  }
}

export default UserQueries;
