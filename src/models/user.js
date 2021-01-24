const mongoose = require("mongoose");

// defininco os campos dentro do banco de dados na tabela usuário
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true // para ser somente caixa baixa
  },
  password: {
    type: String,
    required: true,
    select: false // para quando buscar um usuário a senha nao vir no array de usuários
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// definindo o Model
const User = mongoose.model("User", UserSchema);

// exportando o model
module.exports = User;
