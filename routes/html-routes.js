var db = require("../models");

module.exports = function (app) {
    //for login page
    app.get("/", (req, res) => {
        res.render("index");
    });

    //for handlebars templates... id is name of the file, ex: template0
    app.get("/template/:id", (req, res) => {
        template = "template" + req.params.id;
        //just using for example
        var hbsObj = {
            blogPost: [{
                title: "Example",
                body: "blahblahblah"
            }]
        }
        res.render(template, hbsObj);
    });

    //to get a user's blog (for now using userID)
    app.get("/blogs/:userID", (req, res) => {
        var userID = req.params.userID
        var template;
        var hbsObj;

        console.log(typeof userID);
        //get user's chosen template
        db.User.findOne({
            where: {
                id: userID
            }
        }).then((user) => {
            console.log(user.name)
            var template = "template" + User.template;
        //get user's blog posts
        }).then(() => {
            db.BlogPost.findAll({
                where: {
                    userId: userID
                }
            }).then((Posts) => {
                var hbsObj = {
                    blogPost: Posts
                }
            });
        //render blog posts in chosen template
        }).then(() => {
            res.render(template, hbsObj);
        });
    });

    //NEED GET REQUEST FOR PAGE WHERE USERS CHOOSE TEMPLATE
    //NEED GET REQUEST FOR PAGE WHERE USERS MANAGE THEIR OWN BLOG
};
