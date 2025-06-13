'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contacts', 'telephone', {
      type: Sequelize.STRING,
      allowNull: true, // Autorise un téléphone vide
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts', 'telephone');
  }
};

