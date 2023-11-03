const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const UserLibrary = require("../models/userLibrary");
const { User } = require('../models');
const db = require("../models");
const { Manga, MangaVolume } = require("../models");

router.post('/register', register);
router.post('/login', login);



router.get("/manga", async (req, res) => {
  try {
    const mangas = await Manga.findAll({
      attributes: ["id", "title", "theme", "description", "author", "image"],
    });
    res.json(mangas);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Erreur lors de la récupération des mangas: " + err.message);
  }
});

router.get("/manga/:mangaId", async (req, res) => {
  try {
    const { mangaId } = req.params;
    const manga = await Manga.findByPk(mangaId, {
      attributes: ["id", "title", "description", "author", "image"],
    });

    if (!manga) {
      return res.status(404).send("Manga non trouvé.");
    }

    res.json(manga);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur lors de la récupération des détails du manga: " + err.message
      );
  }
});

router.get("/mangaVolume/:mangaId/volumes", async (req, res) => {
  try {
    const { mangaId } = req.params;
    const volumes = await MangaVolume.findAll({
      where: { mangaId },
      include: {
        model: Manga,
        attributes: ["title", "author", "theme", "description", "image"],
      },
    });
    res.json(volumes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors de la récupération des volumes.");
  }
});


router.get("/mangaVolume", async (req, res) => {
  try {
    const mangaVolumes = await MangaVolume.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "releaseDate",
        "image",
        "mangaId",
      ],
      include: {
        model: Manga,
        attributes: ["title", "author"],
      },
    });

    res.json(mangaVolumes);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur lors de la récupération des volumes et des mangas: " +
          err.message
      );
  }
});

router.get("/mangaVolume/:mangaVolumeId", async (req, res) => {
  try {
    const { mangaVolumeId } = req.params;
    const mangaVolume = await MangaVolume.findByPk(mangaVolumeId, {
      attributes: [
        "id",
        "title",
        "description",
        "releaseDate",
        "image",
        "mangaId",
      ],
      include: {
        model: Manga,
        attributes: ["title", "author", "theme"],
      },
    });

    if (!mangaVolume) {
      return res.status(404).send("Volume de manga non trouvé.");
    }

    res.json(mangaVolume);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur lors de la récupération des détails du volume de manga: " +
          err.message
      );
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

// Route pour récupérer les informations de l'utilisateur connecté
router.get("/user/profile", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; 
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send("Utilisateur non trouvé.");
    }
    res.json({ name: user.name, email: user.email, pseudo: user.pseudo, bio: user.bio, address: user.address });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors de la récupération du profil utilisateur.");
  }
});

router.put('/updateProfile', authMiddleware, async (req, res) => {
});


module.exports = router;
