'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Passenger.init({
    name: {
      type:DataTypes.STRING,
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
      type:DataTypes.STRING,
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
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        isNumeric:true,
      }

    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isValidPassword(value) {
          if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)) {
            throw new Error("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character");
          }
        }
      }
    }
    
  }, {
    sequelize,
    modelName: 'Passenger',
  });
  return Passenger;
};