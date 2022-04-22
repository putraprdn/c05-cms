require("dotenv").config(); // kegunaan untuk membaca file .env

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const flash = require("connect-flash");
const router = require("./router");

const app = express();
const port = process.env.PORT || 3500;

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(
	session({
		secret: "geeksforgeeks",
		saveUninitialized: true,
		resave: true,
	})
);
app.use(flash());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

app.use("/", router);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
