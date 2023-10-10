const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const UserLibrary = require("../models/userLibrary");
const User = require("../models/user");
const db = require('../models'); 
const Manga = db.Manga;

router.post("/register", register);
router.post("/login", login);

router.get("/manga", async (req, res) => {
  try {
    console.log(Manga);
    const mangas = await Manga.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "releaseDate",
        "author",
        "image",
      ],
    });
    res.json(mangas);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Erreur lors de la récupération des mangas: " + err.message);
  }
});

router.post("/manga", authMiddleware, async (req, res) => {
  try {
    const mangaData = await Manga.create(req.body);
    res.json(mangaData);
  } catch (err) {
    res.status(500).send("Erreur lors de l'ajout du manga.");
  }
});

router.post("/my-library", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const { mangaId } = req.body;

    const mangaData = await Manga.findByPk(mangaId);
    if (!mangaData) {
      return res.status(404).send("Manga non trouvé.");
    }

    await UserLibrary.create({ userId, mangaId });
    res.send("Manga ajouté à la bibliothèque.");
  } catch (err) {
    res.status(500).send("Erreur lors de l'ajout du manga à la bibliothèque.");
  }
});

router.get("/my-library", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const userData = await User.findByPk(userId, {
      include: Manga,
    });
    res.json(userData.Mangas);
  } catch (err) {
    res.status(500).send("Erreur lors de la récupération de la bibliothèque.");
  }
});

module.exports = router;
