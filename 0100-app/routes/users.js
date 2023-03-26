const express = require('express');
const router = express.Router()
const { addSymbol, welcome, dashboard } = require('../controllers/users/users.controller');
const { addSymbolValidator } = require('../controllers/users/users.validators');
const db = require('../middlewares/db');

const joi = require('../middlewares/joi');

router.use(db);
router.get('/welcome', welcome);
router.get('/dashboard', dashboard);

router.post('/symbol', joi(addSymbolValidator), addSymbol);

module.exports = router;