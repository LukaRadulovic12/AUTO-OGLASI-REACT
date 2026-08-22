import express from "express";
const router = express.Router();
import AuthController from "../controllers/AuthController.mjs";

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await AuthController.register(username, email, password);
    if (!result) {
      console.log("GRESKA PRI REGISTROVANJU");
    }
    res.cookie("sessionToken", result.token, {
      maxAge: 3600000,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    delete result.token;
    console.log(result);
    res.json(result);
  } catch (error) {
    switch (error.code) {
      case "ER_DUP_ENTRY":
        res.status(400).json({ error: "USERNAME IS ALREDY TAKEN" });
        break;
      case "SHORT_USERNAME":
        res
          .status(400)
          .json({ error: "USERNAME SHOULD CONTAIN ATLEAST 8 CHARACTERS" });
        break;
      case "SHORT_PASSWORD":
        res
          .status(400)
          .json({ error: "PASSWORD SHOULD CONTAIN ATLEAST 8 CHARACTERS" });
        break;
      case "NO_NUMBERS_PASSWORD":
        res
          .status(400)
          .json({ error: "PASSWORD SHOULD CONTAIN ATLEAST 1 NUMBER" });
        break;

      default:
        res.status(400).json({ error: "UNEXPECTED ERROR" });
        break;
    }
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await AuthController.login(username, password);

    res.cookie("sessionToken", result.token, {
      maxAge: 3600000,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    delete result.token;

    res.json(result);
  } catch (error) {
    res.status(401).json({ error: "INVALID CREDENTIALS" });
  }
});

router.get("/is-username-free", async (req, res) => {
  const { username } = req.query;
  const isUsernameFree = await AuthController.isUsernameFree(username);

  res.json(isUsernameFree);
});

export default router;
