const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./models");

// Charger les variables d'environnement
dotenv.config();

// Initialiser l'application Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); // Rendre le dossier des images accessible

app.use(bodyParser.json());

// Route de test pour vérifier que l'API fonctionne
app.get("/", (req, res) => {
  res.send("API fonctionne 🚀");
});

// Routes API de test
const produitRoutes = require("./routes/produits");
app.use("/api/produits", produitRoutes);

const avisRoutes = require("./routes/avis");
app.use("/api/avis", avisRoutes);

const contactRoutes = require("./routes/contacts");
app.use("/api/contacts", contactRoutes);

const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
  });
});

