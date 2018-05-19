var path = require("path");

module.exports = function (app) {
    //for login page
    app.get("/", (req, res) => {
        res.render("index");
    });

    //welcome page
    app.get("/welcome", (req, res) => {
        res.render("blogSpace");
    });

    //create a blog pg
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
            }]
        }
        res.render(template, hbsObj);
    });
};
