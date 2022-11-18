const User = require("../models/model");
const jwt = require('jsonwebtoken')
require('dotenv').config()
const login = async(req,res) => {
    const userWithEmail = await User.findOne({
        where : {
            email : req.body.email
        } 
    }).catch((err) => {
        console.log(err)
    })

    if(!userWithEmail) {
        res.send({
            message : "not registered"
        })
    }
    if(userWithEmail.password !== req.body.password){
        res.send({
            message : "not registered"
        })
    }
    
    const jwtToken = jwt.sign({ email : userWithEmail.email},"90b9e775b73d5a57490c4ec92ce16e6bbdbac2110b1cb6a7bcbec2a8d857798d742b073c208d839b66a9c3b77ccceaa1e0dc641ce13879dd21ee4233398c604f")
    res.send({
        succsess : true,
        token : jwtToken
    })
}


module.exports = login