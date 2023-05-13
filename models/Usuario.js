const Sequelize = require("sequelize")

const bancodedadoscisam = require('../database/cisamdb')

const Usuario = bancodedadoscisam.define('usuario', {
    cpf_usuario: {
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true
    },
    nomeUsuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    codCategoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeCategoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING(9),
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
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    uf: {
        type: Sequelize.STRING(2),
        allowNull: false
    }
})

Usuario.sync()

module.exports = Usuario