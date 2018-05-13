var db = require("../models");
//UserSignUp.js
module.exports = function(app){
    //Creating user from html post Signing UP
    app.post("/api/user", function(req,res){
        db.User.create(req.body).then(function(dbUser){
            console.log(dbUser)
            res.json(dbUser);
        });
    });

}