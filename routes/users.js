const express = require("express");
const router = express.Router();

router.route("/users")
    .get((req, res)=>{
        res.send("All users");
    })
    .post((req, res)=>{
        res.send("User created");
    });

module.exports = router;