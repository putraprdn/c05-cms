require("dotenv").config(); // kegunaan untuk membaca file .env

const express = require("express"); // inisiasi variable yang berisi express
const cors = require("cors"); // inisiasi variable yang berisi cors
const bodyParser = require("body-parser"); // inisiasi variable yang berisi body parser
const expressLayouts = require("express-ejs-layouts");
const router = require("./router");

const app = express();
const port = process.env.PORT || 3500;

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

app.use("/", router);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
