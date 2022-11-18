const {DataTypes} = require('sequelize');
const sequelize = require('../database/index');

const User = sequelize.define('Users', {
    user_id : {
        primaryKey : true,
        autoIncrement : true,
        type : DataTypes.INTEGER
    },
    email : 
    {
        unique : true,
        type : DataTypes.STRING
    },
    password : {
        unique : true,
        type : DataTypes.STRING
    }
})

module.exports = User