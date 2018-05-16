var express = require("express");
var router = express.Router();

// Routes
// =============================================================


  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  router.get("/", function(req, res) {
    res.render("index");
  });

  module.exports = router;