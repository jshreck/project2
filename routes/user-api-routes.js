var user = require("../models/user.js");
var blogPost = require("../models/blogPost.js")

module.exports = function(app){
    //Creating user from html post Signing UP
    app.post("/api/newUser", function(req,res){
        console.log(req.body);
        user.create(req.body).then(function(dbUser){
            console.log(dbUser)
            res.json(dbUser);
        });
    });
}