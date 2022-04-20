const express = require("express"); //inisiasi variable yang berisi express
const router = express.Router(); // inisiasi variable yang berisi fungsi router express
const view = require("./car");

// ------------------------------------------
router.use("/", view);

module.exports = router; // export fungsi router agar module lain bisa membaca file ini
