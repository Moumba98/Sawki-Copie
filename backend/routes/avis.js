const express = require("express");
const router = express.Router();

// Exemple de données d'avis (normalement, tu récupéreras ces données depuis ta base de données)
let avis = [
  { id: 1, message: "Super service !" },
  { id: 2, message: "Très bon produit !" },
];

// Route pour obtenir tous les avis
router.get("/", (req, res) => {
  res.json(avis);
});

// Route pour ajouter un avis
router.post("/", (req, res) => {
  const { message } = req.body;
  const newAvis = {
    id: avis.length + 1, // Génère un ID unique
    message,
  };
  avis.push(newAvis); // Ajoute un nouvel avis à la liste
  res.json(newAvis);  // Retourne l'avis ajouté
});

module.exports = router;
