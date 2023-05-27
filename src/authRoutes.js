const express = require('hapi');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

module.exports = router;
