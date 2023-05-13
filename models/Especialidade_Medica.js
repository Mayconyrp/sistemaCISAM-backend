const Sequelize = require("sequelize")

const bancodedadoscisam = require('../database/cisamdb')

const Especialidade_Medica = bancodedadoscisam.define('especialidadeMedica', {
    id_especialidade: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeEspecialidade: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
}) 

Especialidade_Medica.sync()

module.exports = Especialidade_Medica