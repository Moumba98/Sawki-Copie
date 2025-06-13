'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
      // define association here
    }
  }
  Contact.init(
    {
      nom: DataTypes.STRING,
      email: DataTypes.STRING,
      telephone: DataTypes.STRING, // Ajout du champ téléphone
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Contact',
    }
  );
  return Contact;
};
