const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callBack) {
    try{
        var users = await userModel.find({});
        callBack(null,users);
    }
    catch(err){
        callBack(err , null);
    }
}

module.exports.creatFirstUser = async function(callBack) {
    try{
        var user = {
            userName : "Jashwanth",
            yearOfGraduation : 2024

        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callBack(null,result);
    }
    catch(err){
        callBack(err , null);
    }
}