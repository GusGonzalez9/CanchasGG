const S = require("sequelize");
const db = require("../db");
const Rate = require("./Rate");

class Product extends S.Model {}
Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: true,
    },
    price: {
      type: S.FLOAT,
      allowNull: false,
      get() {
        return `$${this.getDataValue("price")}`;
      },
    },
    stock: {
      type: S.INTEGER,
      allowNull: false,
    },
    off: {
      type: S.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
