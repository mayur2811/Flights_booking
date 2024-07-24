'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Passengers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
        isAlpha:true,
        },
       len: {
        args: [3, 50], // Minimum length 3, maximum length 50
        msg: "Name must be between 3 and 50 characters in length"
      }

      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
      validate:{
        isEmail:true,
      },
      len: {
        args: [10, 50], // Minimum length 3, maximum length 50
        msg: "email must be between 3 and 50 characters in length"
      }
      },
      phone: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate:{
        isNumeric:true,
      }
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
        isValidPassword(value) {
          if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)) {
            throw new Error("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character");
          }
        }
       }
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
    await queryInterface.dropTable('Passengers');
  }
};