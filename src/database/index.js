// definindo o mongose
const mongose = require("mongoose");

// conectando ao bando de dados
mongose.connect("mongodb://localhost/cadastro", { useMongoClient: true });
mongose.Promise = global.Promise;

module.exports = mongose;
