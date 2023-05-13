

const { Sequelize } = require("sequelize")

const bancodedadoscisam = new Sequelize('cisamDataBase', 'root', 'maycon', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = bancodedadoscisam