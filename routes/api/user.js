const router = require("express").Router();
const userController = require("../../controllers/userController");

//Connects to "/api"
router.route("/")
    // .get(userController.findAll)
    .post((req, res) => {
        //console.log(req);
        //return res.send(req);
        return console.log("api/user")
    });

router.route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove)

module.exports = router;