const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Food = sequelize.define('food', {
  // Define the attributes of the Food model
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Add more attributes as needed, such as quantity, description, etc.
});

module.exports = Food;
