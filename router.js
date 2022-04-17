import express from "express";
import { list, create, update } from "./controller/carController.js";

const router = express.Router();

router.get("/", list);
router.get("/create", create);
router.get("/update", update);

// catch 404
router.use("/", list);

export default router;
