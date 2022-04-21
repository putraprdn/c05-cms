const axios = require("axios");
module.exports = {
	list: (req, res) => {
		axios
			.get("http://localhost:3000/api/cars")
			.then((resp) => {
				const data = {
					cars: resp.data,
					layout: "partials/main-layout",
					title: "List Car",
					url: "home",
				};
				// console.log(data.cars.data[0].name);
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
			.get(`http://localhost:3000/api/car/${req.params.id}`)
			.then((resp) => {
				const data = {
					cars: resp.data,
					layout: "partials/main-layout",
					title: "Update Car Information",
					url: req.url,
				};
				// console.log(cars.data.name);
				res.render("updateCar", data);
			})
			.catch((error) => {
				console.log(error);
			});
	},
};

// // const { request } = require("express");
// module.exports = {
// 	list: (req, res) => {
// 		return res.render("index", {
// 			layout: "partials/main-layout",
// 			title: "List Car",
// 			url: "home",
// 		});
// 	},
// 	create: (req, res) => {
// 		return res.render("createCar", {
// 			layout: "partials/main-layout",
// 			title: "Add New Car",
// 			url: req.url,
// 		});
// 	},

// 	update: (req, res) => {
// 		return res.render("updateCar", {
// 			layout: "partials/main-layout",
// 			title: "Update Car Information",
// 			url: req.url,
// 		});
// 	},
// };
