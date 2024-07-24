'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    bookingId:{
      type:DataTypes.STRING,
      allowNull:false,
    },
     
    amount: {
      type:DataTypes.INTEGER,
      allowNull:false,
      
    },
    
    paymentDate: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    
    paymentMethod: {
      type:DataTypes.STRING,
      allowNull:false,
      values :[UPI ,CREDIT_CARD,CASH],
      defaultValue:CASH,
    }
      
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};