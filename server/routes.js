const express = require('express');

const passwordRoute = require('./routes/password');

const router = express.Router();

router.use('/password', passwordRoute);

module.exports = router;
