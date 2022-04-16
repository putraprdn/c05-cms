import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./router.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3500;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router)



app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
