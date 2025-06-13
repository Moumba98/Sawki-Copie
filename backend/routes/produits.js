const express = require("express");
const router = express.Router();
const { Produit } = require("../models");

// Obtenir tous les produits
router.get("/", async (req, res) => {
  const produits = await Produit.findAll();
  res.json(produits);
});

// Ajouter un produit
router.post("/", async (req, res) => {
  const { nom, description, prix } = req.body;
  const newProduit = await Produit.create({ nom, description, prix });
  res.json(newProduit);
});

// Modifier un produit
router.put("/:id", async (req, res) => {
  const { nom, description, prix } = req.body;
  await Produit.update({ nom, description, prix }, { where: { id: req.params.id } });
  res.json({ message: "Produit mis à jour" });
});

// Supprimer un produit
router.delete("/:id", async (req, res) => {
  await Produit.destroy({ where: { id: req.params.id } });
  res.json({ message: "Produit supprimé" });
});

module.exports = router;