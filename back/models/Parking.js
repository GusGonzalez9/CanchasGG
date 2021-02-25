const S = require("sequelize");
const db = require("../db");

class Parking extends S.Model {}
Parking.init(
  {
    value: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "parking" }
);

//  08:20
module.exports = Parking;
