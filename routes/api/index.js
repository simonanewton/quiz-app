const router = require("express").Router();
const userRoutes = require("./user");

router.use("/user", userRoutes); // api/user

module.exports = router;
