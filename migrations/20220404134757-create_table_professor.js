'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("professores", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      turma: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nivel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      trabalho: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("professores");
  },
};
