const Sequelize = require("sequelize")

const bancodedadoscisam = require('../database/cisamdb')

const Consulta = bancodedadoscisam.define('consultas', {
    id_consulta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dataSolicitacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dataConsulta: {
        type: Sequelize.DATE,
        allowNull: false
        // get: function(){
        //     return this.getDataValue('dataConsulta').toLocaleString('en-GB', {timeZone: 'UTC'});
        // }
    },
    queixaPaciente: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    cpf_paciente: {
        type: Sequelize.STRING(14),
        allowNull: false,
        primaryKey: true
    },


})

Consulta.sync()

module.exports = Consulta

