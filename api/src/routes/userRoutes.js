const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const {verifyToken} = require("../middlewares/authMiddleware");
// const userMangaVolume = require("../models/userMangaVolume");
const { User } = require("../models");
const db = require("../models");
const { Manga, MangaVolume, UserMangaVolume } = require("../models");

router.post("/register", register);
router.post("/login", login);

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

router.post("/manga", verifyToken, async (req, res) => {
  try {
    const mangaData = await Manga.create(req.body);
    res.json(mangaData);
  } catch (err) {
    res.status(500).send("Erreur lors de l'ajout du manga.");
  }
});

router.post("/userMangaVolume", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { mangaVolumeId } = req.body;

    const mangaVolumeData = await Manga.findByPk(mangaVolumeId);
    if (!mangaVolumeData) {
      return res.status(404).send("Manga volume non trouvé.");
    }

    await UserMangaVolume.create({ userId, mangaVolumeId });
    res.send("Manga volume ajouté à la bibliothèque.");
  } catch (err) {
    res.status(500).send("Erreur lors de l'ajout du manga volume à la bibliothèque.");
  }
});

router.get("/userMangaVolume", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const userData = await User.findByPk(userId, {
      include: UserMangaVolume,
    });
    res.json(userData.UserMangaVolumes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors de la récupération de la bibliothèque.");
  }
});

// Route pour récupérer les informations de l'utilisateur connecté
router.get("/user/profile", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send("Utilisateur non trouvé.");
    }
    res.json({
      name: user.name,
      email: user.email,
      userName: user.userName,
      bio: user.bio,
      address: user.address,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Erreur lors de la récupération du profil utilisateur.");
  }
});

module.exports = router;
