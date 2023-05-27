const pool = require('../path-to-your-connection-pool');

// Create the users table if it doesn't exist
pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`, (error, results) => {
  if (error) {
    console.error('Error creating users table:', error);
  }
});

// Insert a new user into the database
const createUser = (username, password) => {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

// Find a user by username
const findUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

module.exports = { createUser, findUserByUsername };
