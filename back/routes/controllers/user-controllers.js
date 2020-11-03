const User = require('../../models/User')

const getUsers = (req, res, next) => {
    User.findAll()
    .then(data => res.send(data))
    .catch(next)
}

const addUser = (req, res, next) => {
    User.create(req.body)
    .then(data => res.send(data))
    .catch(next)
}

const getOneUser = (req, res , next) => {
    User.findByPk(req.params.id)
    .then(user => user.getFavorites().then(list => res.send({data: user, list})))
    .catch(next)
}

const validateUser = (req, res, next) => {
    !req.user ? res.sendStatus(401) : res.send(req.user)
}

const logoutUser = (req, res, next) => {
    req.logout();
    res.sendStatus(200)
}

module.exports = {getUsers, addUser, getOneUser, validateUser, logoutUser}