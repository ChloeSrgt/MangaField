const express = require("express");
const router = express.Router();
const { Sequelize, Op } = require("sequelize");

const { register, login } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authMiddleware");
const { User, Manga, MangaVolume, UserMangaVolume } = require("../models");

// Routes d'authentification
router.post("/register", register);
router.post("/login", login);

// Routes de gestion des mangas
router.get("/manga", getMangas);
router.get("/manga/:mangaId", getMangaById);
router.post("/manga", verifyToken, addManga);

// Routes de gestion des volumes manga
router.get("/mangaVolume/:mangaId/volumes", getMangaVolumesByMangaId);
router.get("/mangaVolume", getAllMangaVolumes);
router.get("/mangaVolume/search", searchMangaVolumes);
router.get("/mangaVolume/:mangaVolumeId", getMangaVolumeById);

// Routes de gestion des volumes de manga pour l'utilisateur
router.post("/userMangaVolume", verifyToken, addUserMangaVolume);
router.get("/userMangaVolume", verifyToken, getUserMangaVolumes);
router.delete("/userMangaVolume/:id", verifyToken, deleteUserMangaVolume);

// Route de profil utilisateur
router.get("/user/profile", verifyToken, getUserProfile);

module.exports = router;

async function getMangas(req, res) {
    try {
        const mangas = await Manga.findAll({
            attributes: ["id", "title", "theme", "description", "author", "image"],
        });
        res.json(mangas);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur lors de la récupération des mangas: " + err.message);
    }
}

async function getMangaById(req, res) {
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
        res.status(500).send("Erreur lors de la récupération des détails du manga: " + err.message);
    }
}

async function addManga(req, res) {
    try {
        const mangaData = await Manga.create(req.body);
        res.json(mangaData);
    } catch (err) {
        res.status(500).send("Erreur lors de l'ajout du manga.");
    }
}

async function getMangaVolumesByMangaId(req, res) {
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
}

async function getAllMangaVolumes(req, res) {
    try {
        const mangaVolumes = await MangaVolume.findAll({
            attributes: ["id", "title", "description", "releaseDate", "image", "mangaId"],
            include: {
                model: Manga,
                attributes: ["title", "author"],
            },
        });

        res.json(mangaVolumes);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur lors de la récupération des volumes et des mangas: " + err.message);
    }
}

async function searchMangaVolumes(req, res) {
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
}

async function getMangaVolumeById(req, res) {
    try {
        const { mangaVolumeId } = req.params; 

        const mangaVolume = await MangaVolume.findByPk(mangaVolumeId, {
            attributes: ["id", "title", "description", "releaseDate", "image", "mangaId"],
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
        res.status(500).send("Erreur lors de la récupération des détails du volume de manga: " + err.message);
    }
}


async function addUserMangaVolume(req, res) {
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
        res.status(500).send("Erreur lors de l'ajout du manga volume à la bibliothèque.");
    }
}

async function getUserMangaVolumes(req, res) {
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
}

async function deleteUserMangaVolume(req, res) {
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
        res.status(500).send("Erreur lors de la suppression de l'entrée UserMangaVolume : " + err.message);
    }
}

async function getUserProfile(req, res) {
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
        res.status(500).send("Erreur lors de la récupération du profil utilisateur.");
    }
}
