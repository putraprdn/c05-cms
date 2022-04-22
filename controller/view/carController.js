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
				const errorMessage = req.flash("error");
				const data = {
					cars: resp.data,
					layout: "partials/main-layout",
					title: "List Car",
					url: "home",
					msg: message,
					deleteMsg: deleteMessage,
					errorMsg: errorMessage,
				};
				res.render("index", data);
			})
			.catch((error) => {
				req.flash("error", "Gagal Menampilkan Data!");
				return res.status(500).redirect("/");
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
				const data = {
					cars: resp.data,
					layout: "partials/main-layout",
					title: "Update Car Information",
					url: req.url,
				};
				res.render("updateCar", data);
			})
			.catch((error) => {
				req.flash("error", "Gagal Mengupdate Data!");
				return res.status(500).redirect("/");
			});
	},
	filter: (req, res) => {
		axios
			.get(`http://localhost:${port}/api/cars/${req.params.size}`)
			.then((resp) => {
				const message = req.flash("message");
				const deleteMessage = req.flash("delete");
				const errorMessage = req.flash("error");
				const data = {
					cars: resp.data,
					layout: "partials/main-layout",
					title: "List Car",
					url: "home",
					msg: message,
					deleteMsg: deleteMessage,
					errorMsg: errorMessage,
				};
				res.render("index", data);
			})
			.catch((error) => {
				// req.flash("error", "Gagal Mengupdate Data!");
				return res.status(500).redirect("/");
			});
	},
};
