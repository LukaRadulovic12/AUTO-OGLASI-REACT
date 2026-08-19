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
  
}

export default UserQueries;
