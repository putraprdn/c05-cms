import { request } from "express";

export const list = (req, res) => {
	return res.render("index", {
		layout: "partials/main-layout",
		title: "List Car",
		url: "home",
	});
};

export const create = (req, res) => {
	return res.render("createCar", {
		layout: "partials/main-layout",
		title: "Add New Car",
		url: req.url,
	});
};

export const update = (req, res) => {
	return res.render("updateCar", {
		layout: "partials/main-layout",
		title: "Update Car Information",
		url: req.url,
	});
};
