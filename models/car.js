"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class car extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	car.init(
		{
			name: {
				DataTypes: STRING,
				allowNull: false,
			},
			type: {
				DataTypes: STRING,
				allowNull: false,
			},
			rent_price: {
				DataTypes: INTEGER,
				allowNull: false,
			},
			image: {
				DataTypes: STRING,
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: "car",
			tableName: "cars",
			timestamps: true,
		}
	);
	return car;
};
