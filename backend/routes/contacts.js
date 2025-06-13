const express = require("express");
const router = express.Router();
const { Contact } = require("../models");

// Obtenir tous les messages de contact
router.get("/", async (req, res) => {
  const contacts = await Contact.findAll();
  res.json(contacts);
});

// Ajouter un message de contact
// Ajouter un message de contact
router.post("/", async (req, res) => {
  const { nom, email, telephone, message } = req.body;

  try {
    const newContact = await Contact.create({ nom, email, telephone, message });
    res.status(201).json(newContact);
  } catch (error) {
    console.error("Erreur lors de la création du contact :", error);
    res.status(500).json({ error: "Erreur serveur lors de l'ajout du contact" });
  }
});


// Supprimer un message de contact par ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByPk(id);

    if (!contact) {
      return res.status(404).json({ error: "Message non trouvé" });
    }

    await contact.destroy();  // Suppression du message
    res.status(200).json({ message: "Message supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la suppression" });
  }
});

module.exports = router;


/*const express = require("express");
const router = express.Router();
const { Contact } = require("../models");

// Obtenir tous les messages de contact
router.get("/", async (req, res) => {
  const contacts = await Contact.findAll();
  res.json(contacts);
});

// Ajouter un message de contact
router.post("/", async (req, res) => {
  const { nom, email, message } = req.body;
  const newContact = await Contact.create({ nom, email, message });
  res.json(newContact);
});

module.exports = router; */
