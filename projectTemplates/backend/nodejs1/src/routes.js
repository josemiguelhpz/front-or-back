const Router = require('express');
const { hello } = require('./logic.js');

const router = Router();

router.get('/hello/:name', hello);

module.exports = router;