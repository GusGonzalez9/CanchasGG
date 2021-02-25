const S = require("sequelize");
const db = require("../db");

class Sport extends S.Model {}
Sport.init(
  {
    name: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "sport" }
);

//  08:20
module.exports = Sport;
