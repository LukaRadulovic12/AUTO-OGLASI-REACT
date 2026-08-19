import express from "express";
const router = express.Router();
import AuthController from "../controllers/AuthController.mjs";

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const result = await AuthController.register(username, password, email);
  if (!result) {
    console.log("GRESKA PRI REGISTROVANJU");
  }
  res.cookie("sessionToken", result.token, {
    maxAge: 900000,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  delete result.token
  console.log(result);
  res.json(result);
});

export default router;
