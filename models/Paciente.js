const Sequelize = require("sequelize")

const bancodedadoscisam = require('../database/cisamdb')

const Paciente = bancodedadoscisam.define('paciente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    termoLGPD: {
        type: Sequelize.STRING,
        allowNull: false
    },
    prontuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //ABA DADOS PESSOAIS
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeMae: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeSocial: {
        type: Sequelize.STRING,
        allowNull: true
    },
    //PRIMARY KEY
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    rg: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNasc: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    idade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //DADOS RESIDÊNCIA
    uf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },


    //DADOS EXTRAS ABA - 1 E 3
    especialidade: {
        type: Sequelize.STRING,
        allowNull: false
    },

    dataMenstruacao: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    perguntaMenstruacao: {
        type: Sequelize.STRING,
        allowNull: true
    },

    perguntaMenstruacao: {
        type: Sequelize.STRING,
        allowNull: true
    },
})

Paciente.sync()

module.exports = Paciente