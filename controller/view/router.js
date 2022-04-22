const express = require("express");
const router = express.Router();
const { list, create, update, filter } = require("./carController");

// routing append "/"
router.get("/", list);
router.get("/create", create);
router.get("/update/:id", update);
router.get("/filter/:size", filter);

module.exports = router;
