const S = require("sequelize");
const db = require("../db");

class Turn extends S.Model {}
Turn.init(
  {
    time: {
      type: S.DATE, //a que hora se juega
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "turn" }
);

//  08:20
module.exports = Turn;

/* let horario = { year: 2021, month: june, day: 22, time: "17PM", end: "18PM" };
 */

/* 
const turno = {
  userId: 1,
  sportId: 1,
  fieldID: 1,
  services: {
    choris: true,
    escabio: false,
    asado: false
  },
  time: {
    year: 2021,
    month: 2,
    day: 5,
    start: '19pm',
    end: '20pm',
  }
}

router.post('/api/newTurn', async (req,res)=>  {
  const turnoCreado = await Turn.create(req.body.time)
  const servicioCreado = await Service.create(req.body.service)
  const fieldEncontrado = await Field.findbypk(req.body.service)

  //
  const user = await User.findOne(req.body.user.id)
  const sport = await User.findOne(req.body.sportId)

  //
  turnoCreado.setUser(req.body.userId).then((turno) => turnoCreado.setService(servicioCreado))
  .then((turno) => turno */
