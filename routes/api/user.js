const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const authenticate = require("../../config/authenticate");
const passport = require("passport");

router.post("/create", userController.create);

router.post("/login", passport.authenticate("local"), userController.login);

router.get("/", userController.findAll);

router.use(authenticate);

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});

router.get("/data", (req, res) => {
	res.json(req.session.passport.user);
});

router.route("/:id")
	.get(userController.findById)
	.put(userController.updateScore);

module.exports = router;
