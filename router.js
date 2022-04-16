import express from "express";
import { yeahh } from "./controller/tesController.js";

const router = express.Router();

router.get("/ya", yeahh);


export default router;