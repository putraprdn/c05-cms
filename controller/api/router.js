const express = require("express"); //inisiasi variable yang berisi express
const router = express.Router(); // inisiasi variable yang berisi fungsi router express
const apiController = require("./carController");

// routing append "/api"
router.get("/cars", apiController.list);
router.get("/car/:id", apiController.get);
router.post("/car/create", apiController.create);
router.post("/car/update/:id", apiController.update);
router.get("/car/delete/:id", apiController.destroy);

module.exports = router;
