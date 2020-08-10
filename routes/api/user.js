const express = require('express');
const router = express.Router();
const userController = require("../../controllers/userController");
const authenticate = require("../../config/authenticate");
const passport = require('passport');

router.post("/create", userController.create)

router.post("/login",  passport.authenticate("local"), userController.login)

router.use(authenticate);

router.get("/", userController.findAll)
 
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

router.route("/:id")
    .get(userController.findById)
    .put(userController.updateScore)
    // .put(userController.update)
    // .delete(userController.remove)

module.exports = router;
