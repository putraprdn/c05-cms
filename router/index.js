const express = require("express"); //inisiasi variable yang berisi express
const router = express.Router(); // inisiasi variable yang berisi fungsi router express
const view = require("../controller/view/router");
const api = require("../controller/api/router");

router.use("/", view);
router.use("/api", api);

module.exports = router; // export fungsi router agar module lain bisa membaca file ini
