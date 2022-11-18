const User = require("../models/model");
const passport = require("passport")
const payment = async(req,res) => {
    res.send({
        message : "hello protected"
    })
}

module.exports = payment