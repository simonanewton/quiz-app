const router = require("express").Router();
const userRoutes = require("./user");
const scoreRoutes = require('./score');
const db = require("../../models/");

router.use("/user", userRoutes);
router.use("/scores", scoreRoutes)

router.route("/signin").post(async (req, res) => {
    try {
        let user = await db.User.findOne({ username: req.body.username }).exec();

        if (!user) {
            return res.status(400).send({ message: "This username does not exist" });
        }
        
        user.comparePassword(req.body.password, (err, match) => {
            if (err) throw err;
            else if (!match) {
                return res.status(400).send({ message: "Password is incorrect" })
            } else {
                console.log("Password is correct")
                return res.json(user)
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

//If no api - reroute
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;
