const model = require("../../models");

const api = {
	list: async (req, res) => {
		try {
			const datas = await model.car.findAll();

			return res.status(200).json({
				success: true,
				error: 0,
				message: "data successfully listed",
				data: datas,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error.code,
				message: error,
				data: null,
			});
		}
	},
	create: async (req, res) => {
		try {
			const data = await model.car.create(req.body);

			return res.status(200).redirect("/");
			// .json({
			// 	success: true,
			// 	error: 0,
			// 	message: "data successfully created",
			// 	data: data,
			// })
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error.code,
				message: error,
				data: null,
			});
		}
	},
	get: async (req, res) => {
		try {
			const datas = await model.car.findOne({
				where: {
					id: req.params.id,
				},
			});

			return res.status(200).json({
				success: true,
				error: 0,
				message: "data successfully listed",
				data: datas,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error.code,
				message: error,
				data: null,
			});
		}
	},
	update: async (req, res) => {
		try {
			const data = await model.car.update(
				{
					name: req.body.name,
					size: req.body.type,
					rent_price: req.body.rent_price,
					image: req.body.image,
				},
				{
					where: {
						id: req.params.id,
					},
				}
			);

			return res.status(200).redirect("/");
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error.code,
				message: error,
				data: null,
			});
		}
	},
	destroy: async (req, res) => {
		try {
			const data = await model.car.destroy({
				where: {
					id: req.params.id,
				},
			});

			return res.status(200).redirect("/");
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error.code,
				message: error,
				data: null,
			});
		}
	},
};

module.exports = api;

// const model = require("../models");

// module.exports = {
// 	list: async (req, res) => {
// 		try {
// 			const datas = await model.car.findAll();

// 			return res.status(200).json({
// 				success: true,
// 				error: 0,
// 				message: "data successfully listed",
// 				data: datas,
// 			});
// 		} catch (error) {
// 			return res.status(500).json({
// 				success: false,
// 				error: error.code,
// 				message: error,
// 				data: null,
// 			});
// 		}
// 	},
// 	create: async (req, res) => {
// 		try {
// 			const data = await model.car.create(req.body);

// 			return res.status(200).json({
// 				success: true,
// 				error: 0,
// 				message: "data successfully created",
// 				data: data,
// 			});
// 		} catch (error) {
// 			return res.status(500).json({
// 				success: false,
// 				error: error.code,
// 				message: error,
// 				data: null,
// 			});
// 		}
// 	},
// 	update: async (req, res) => {
// 		try {
// 			const data = await model.car.update(
// 				{
// 					name: req.body.name,
// 					size: req.body.type,
// 					rent_price: req.body.rent_price,
// 					image: req.body.image,
// 				},
// 				{
// 					where: {
// 						id: req.body.id,
// 					},
// 				}
// 			);

// 			return res.status(200).json({
// 				success: true,
// 				error: 0,
// 				message: "data successfully updated",
// 				data: data,
// 			});
// 		} catch (error) {
// 			return res.status(500).json({
// 				success: false,
// 				error: error.code,
// 				message: error,
// 				data: null,
// 			});
// 		}
// 	},
// 	destroy: async (req, res) => {
// 		try {
// 			const data = await model.car.destroy({
// 				where: {
// 					id: req.body.id,
// 				},
// 			});

// 			return res.status(200).json({
// 				success: true,
// 				error: 0,
// 				message: "data successfully deleted",
// 				data: data,
// 			});
// 		} catch (error) {
// 			return res.status(500).json({
// 				success: false,
// 				error: error.code,
// 				message: error,
// 				data: null,
// 			});
// 		}
// 	},
// };
