var path = require("path");

module.exports = function (app) {
    //for login page
    app.get("/", (req, res) => {
        res.render("index");
    });

    //for handlebars templates... id is name of the file, ex: template0
    app.get("/templates/:id", (req, res) => {
        template = req.params.id;
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
