'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookingId: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      paymentDate: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      paymentMethod: {
        type: Sequelize.STRING,
        allowNull:false,
        values :[UPI ,CREDIT_CARD,CASH],
        defaultValue:CASH,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  }
};