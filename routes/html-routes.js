var db = require("../models");

module.exports = function (app) {
    //for login page
    app.get("/", (req, res) => {
        res.render("index");
    });

    //welcome page
    app.get("/welcome", (req, res) => {
        res.render("blogSpace");
    });

    //manage pg -> only visible if logged in
    app.get("/create", (req, res) => {
        res.render("createBlog");
    });

    //for handlebars templates... id is name of the file, ex: template0
    app.get("/template/:id", (req, res) => {
        template = "template" + req.params.id;
        //just using for example
        var hbsObj = {
            blogPost: [{
                title: "Example",
                body: "blahblahblah"
            }, {
                title: "Example2",
                body: "blah2blah2blah2"
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
};
