const express = require('express');

const {
  getPassword,
  verifyPassword,
} = require('../controllers/password');

const router = express.Router();

router.get('/new-password', getPassword);
router.post('/verify-password', verifyPassword);

module.exports = router;
