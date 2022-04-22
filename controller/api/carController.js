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
			req.flash("message", "Data Berhasil Dibuat!");
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
			req.flash("message", "Data Berhasil Diubah!");
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
			req.flash("delete", "Data Berhasil Dihapus!");
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
