const router = require("express").Router();
const scoreController = require("../../controllers/scoreController");

//Connects to "/api"
router.route("/")
    .get(scoreController.findAll)
    .post(scoreController.create);

router.route("/:id")
    .get(scoreController.findById)
    .put(scoreController.update)
    .delete(scoreController.remove)

module.exports = router;