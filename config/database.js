const sequelize = require("sequelize");

const dbconfig = require("./dbconfig");

const conexao = new sequelize(dbconfig);


const Usuario = require("../models/Usuario");
const Professor = require("../models/Professor");

Usuario.init(conexao);
Professor.init(conexao);


module.exports = conexao;
