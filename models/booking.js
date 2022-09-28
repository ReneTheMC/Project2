'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Booking.hasMany(models.Artists);
      models.Booking.hasMany(models.user);
    }
  }
  Booking.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    time: DataTypes.INTEGER,
    service: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};