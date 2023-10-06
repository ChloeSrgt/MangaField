const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const verifyToken = require("<PATH_TO_VERIFYTOKEN>");

router.post("/register", register);
router.post("/login", login);

router.get("/protected-route", verifyToken, (req, res) => {
  // ???
});

module.exports = router;
