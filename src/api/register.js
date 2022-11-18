const User = require("../models/model");

const register = async(req,res) => {
    
    return User.sync({alter : true}).then(async() => {
         return await User.create({
            email : req.body.email,
            password : req.body.password
        }).then((response) => {
            res.send({
                response : response,
                registered : true
            })
        })
    })
    
}

module.exports = register