const express = require("express"); //inisiasi variable yang berisi express
const router = express.Router(); // inisiasi variable yang berisi fungsi router express
const { list, create, update } = require("../controller/carController");

// ------------------------------------------

router.get("/", list);
router.get("/create", create);
router.get("/update", update);

// catch 404
router.use("/", list);

module.exports = router; // export fungsi router agar module lain bisa membaca file ini
