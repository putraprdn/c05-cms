const express = require("express");
const router = express.Router();
const { list, create, update } = require("./carController");

// routing append "/"
router.get("/", list);
router.get("/create", create);
router.get("/update/:id", update);

module.exports = router; // export fungsi router agar module lain bisa membaca file ini
