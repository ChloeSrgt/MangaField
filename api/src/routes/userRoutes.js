const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authMiddleware");
// const userMangaVolume = require("../models/userMangaVolume");
const { User } = require("../models");
const db = require("../models");
const { Manga, MangaVolume, UserMangaVolume } = require("../models");
const { Sequelize, Op } = require("sequelize");

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
      attributes: ["id", "title", "description", "author", "image", "theme", "status"],
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
        attributes: ["title", "author", "theme", "description", "image", "status"],
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

router.get("/mangaVolume/search", async (req, res) => {
  try {
    const searchTerm = req.query.term;

    let whereCondition = {};
    if (searchTerm) {
      whereCondition = Sequelize.where(
        Sequelize.fn("concat", Sequelize.col("Manga.title"), ' ', Sequelize.col("MangaVolume.title")),
        {
          [Sequelize.Op.iLike]: `%${searchTerm}%`
        }
      );
    }

    const mangaVolumes = await MangaVolume.findAll({
      where: whereCondition,
      include: [{
        model: Manga,
        attributes: ["title", "author"]
      }],
      attributes: ["id", "title", "description", "releaseDate", "image", "mangaId"]
    });

    res.json(mangaVolumes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors de la recherche des volumes de manga: " + err.message);
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
        attributes: ["title", "author", "theme", "status"],
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

    const existingUserMangaVolume = await UserMangaVolume.findOne({
      where: { userId, mangaVolumeId },
    });

    if (existingUserMangaVolume) {
      return res.status(400).send("Ce manga est déjà dans votre bibliothèque.");
    }

    const mangaVolumeExists = await MangaVolume.findByPk(mangaVolumeId);
    if (!mangaVolumeExists) {
      return res.status(404).send("Manga volume non trouvé.");
    }

    const userMangaVolume = await UserMangaVolume.create({
      userId,
      mangaVolumeId,
    });
    res.json(userMangaVolume);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Erreur lors de l'ajout du manga volume à la bibliothèque.");
  }
});

router.get("/userMangaVolume", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const userMangaVolumes = await UserMangaVolume.findAll({
      where: { userId: userId },
      include: [
        {
          model: MangaVolume,
          include: [Manga],
        },
      ],
    });
    res.json(userMangaVolumes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors de la récupération de la bibliothèque.");
  }
});

router.delete("/userMangaVolume/:id", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const userMangaVolume = await UserMangaVolume.findOne({
      where: { userId, id },
    });

    if (!userMangaVolume) {
      return res.status(404).send("Entrée UserMangaVolume introuvable.");
    }

    await userMangaVolume.destroy();

    res.json({ message: "Entrée UserMangaVolume supprimée avec succès." });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur lors de la suppression de l'entrée UserMangaVolume : " +
          err.message
      );
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
