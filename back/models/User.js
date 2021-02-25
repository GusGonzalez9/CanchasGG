const S = require("sequelize");
const db = require("../db");

class User extends S.Model {}
User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: S.STRING,
      allowNull: true,
    },
    adress: {
      type: S.TEXT,
      allowNull: true,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },

    role: {
      type: S.ENUM({
        values: ["user", "admin"], // admin dueño del club
      }),
      defaultValue: "user",
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = User;
