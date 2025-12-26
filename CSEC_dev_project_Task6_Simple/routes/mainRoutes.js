const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

// Home
router.get("/", controller.home);

// About
router.get("/about", controller.about);

// Contact
router.get("/contact", controller.contact);

// Dynamic data
router.get("/time", controller.time);

// JSON POST echo
router.post("/echo", controller.echo);

module.exports = router;
