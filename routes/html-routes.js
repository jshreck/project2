var path = require("path");
//app function being exported
module.exports = function(app){
    //index route 
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
      });

};