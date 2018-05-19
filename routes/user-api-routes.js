var db = require("../models");

module.exports = function(app){
    app.post("/api/newUsers", function(req,res){
        
        console.log("routes req.body.name " + req.body.name);
        db.User.create(req.body).then(function(dbUsers){
            res.json(dbUsers);
            console.log("Data for DB: " + dbUsers);
        })
    })

    app.post('/api/login', function (req,res){ 
        console.log("Rec'd login info " + req.body); 
        db.User.findOne({ 
            where: { 
                name: req.body.name, 
                password: req.body.password 
            } 
        }).then(function(dbUser){ 
            console.log("Sign In dbUser: " + dbUser); 
                if (dbUser!=null){ 
                     //login success========================
                    console.log("Login Success!");
                    res.json (dbUser);
                    //res.redirect("/welcome")
                   
                } 
                else{ 
                    //login fail============================

                    res.send("Nothing"); 
            } 
        }) 
    }) 
}