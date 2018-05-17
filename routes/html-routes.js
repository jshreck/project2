module.exports = function(app) {
  //login/sign up page
  app.get("/", function (req, res) {
    res.render("index");
  });
}

