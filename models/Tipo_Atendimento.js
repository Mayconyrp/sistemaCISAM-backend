const Sequelize = require("sequelize")

const bancodedadoscisam = require('../database/cisamdb')

const Tipo_Atendimento = bancodedadoscisam.define('tipoAtendimento', {
    id_atendimento: {
        type: Sequelize.INTEGER,
        auto_increment: true,
        allowNull: false,
        primaryKey: true
    },
    nomeAtendimento: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 

Tipo_Atendimento.sync()

module.exports = Tipo_Atendimento   
    
    
    