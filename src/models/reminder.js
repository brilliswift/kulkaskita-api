const { DataTypes } = require('sequelize');
const sequelize = require('../database');
   // Make sure to replace '../database' in each file with the correct path to your database connection file.

const Food = sequelize.define('food', {
  // Define the attributes of the Food model
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Add more attributes as needed, such as quantity, description, etc.
});

module.exports = Food;
