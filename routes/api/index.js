const router = require("express").Router();
const scoreRoutes = require('./scores');

router.use('/scores', scoreRoutes);

module.exports = router;
