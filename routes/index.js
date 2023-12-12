var express = require("express");
var router = express.Router();

// Messages array
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

// Add this new POST route
router.post("/new", function (req, res, next) {
  // Here you will handle the incoming post request.
  // For now, let's just log the posted messages and redirect to the homepage.

  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  // You would normally add the newMessage to your messages array or database

  // Redirect to the homepage to display all messages including the new one
  res.redirect("/");
});

module.exports = router;
