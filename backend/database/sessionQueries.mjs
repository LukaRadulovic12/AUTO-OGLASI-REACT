import Database from "./database.mjs";

class SessionQueries {
  static async createSession(id, token, username) {
    const dbInstance = Database.getInstance();

    const [result] = await dbInstance.connection.execute(
      "INSERT INTO sessions (createdBy, createdByUsername, token) VALUES (?, ?, ?)",
      [id, username, token],
    );
    return result;
  }
}

export default SessionQueries