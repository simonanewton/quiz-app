const express = require('express');
const router = express.Router();
const userController = require("../../controllers/userController");


//Connects to "/api"
router.route("/")
    // get request for finding all users
    .get(userController.findAll)
    // posting to API /creating new user
    .post(userController.create);

router.route("/:id")
    //finding users by id
    .get(userController.findById)
    // updating info for settings??
    .put(userController.update)
    // deleting users
    // .delete(userController.remove)

module.exports = router;