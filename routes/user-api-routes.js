var db = require("../models");

module.exports = function(app){
    app.post("/api/newUsers", function(req,res){
        
        console.log("routes req.body.name " + req.body.name);
        db.User.create(req.body).then(function(dbUsers){
            res.json(dbUsers);
            console.log("Data for DB: " + dbUsers);
        })
    })

    app.get("/api/user/:name?/:password?", function(req, res) {
        console.log("Get name and password "  + req.params.name);

         db.User.findOne({
         
           where: {
             name: req.params.name,
             password: req.params.password
           },
         }).then(function(dbUser) {
             console.log("User Password Check");
                
             res.json(dbUser);
             
         });
       });
}