const express = require("express");
const router = express.Router();
const { Admin } = require("../models");
const jwt = require("jsonwebtoken");

// Connexion
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email et mot de passe requis" });
  }
  const admin = await Admin.findOne({ where: { email, password } });
  if (admin) {
    // Générer un token JWT
    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      "votre_secret_key", // Remplace par une vraie clé secrète dans .env !
      { expiresIn: "2h" }
    );
    res.json({ 
      message: "Connexion réussie", 
      admin: { id: admin.id, email: admin.email },
      token
    });
  } else {
    res.status(401).json({ message: "Échec de connexion" });
  }
});

// Modifier le mot de passe
router.post("/change-password", async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  const admin = await Admin.findOne({ where: { email, password: oldPassword } });
  if (!admin) {
    return res.status(401).json({ message: "Ancien mot de passe incorrect" });
  }
  admin.password = newPassword;
  await admin.save();
  res.json({ message: "Mot de passe modifié avec succès" });
});

module.exports = router;
