const { DataTypes } = require('sequelize');
const sequelize = require('../database');
   //Make sure to replace '../database' in each file with the correct path to your database connection file.

const Reminder = sequelize.define('reminder', {
  // Define the attributes of the Reminder model
  // For example, you can have an expiration date attribute
  expirationDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  // Add more attributes as needed, such as description, status, etc.
});

module.exports = Reminder;
