require("dotenv").config();
const axios = require("axios");
const port = process.env.PORT;

module.exports = {
	list: (req, res) => {
		axios
			.get(`http://localhost:${port}/api/cars`)
			.then((resp) => {
				const message = req.flash("message");
				const deleteMessage = req.flash("delete");
				const data = {
					cars: resp.data,
					layout: "partials/main-layout",
					title: "List Car",
					url: "home",
					msg: message,
					deleteMsg: deleteMessage,
				};
				res.render("index", data);
			})
			.catch((error) => {
				console.log(error);
			});
	},
	create: (req, res) => {
		return res.render("createCar", {
			layout: "partials/main-layout",
			title: "Add New Car",
			url: req.url,
		});
	},
	update: (req, res) => {
		axios
			.get(`http://localhost:${port}/api/car/${req.params.id}`)
			.then((resp) => {
				const message = req.flash("message");
				const data = {
					cars: resp.data,
					layout: "partials/main-layout",
					title: "Update Car Information",
					url: req.url,
				};
				res.render("updateCar", data);
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
