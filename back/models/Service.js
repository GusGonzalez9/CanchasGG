const S = require("sequelize");
const db = require("../db");

class Service extends S.Model {}
Service.init(
  {
    chori: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    asado: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    birra: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "service" }
);

//  08:20
module.exports = Service;
