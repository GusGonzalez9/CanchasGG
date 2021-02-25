const S = require("sequelize");
const db = require("../db");

class Field extends S.Model {}
Field.init(
  {
    name: {
      type: S.STRING, //"Cancha 5A"
    },
  },
  { sequelize: db, modelName: "service" }
);

//  08:20
module.exports = Field;
