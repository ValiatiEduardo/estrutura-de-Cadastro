// importe do express por necessidade para uso de rotas
const express = require("express");
// import do model User para questões de login e cadastro de novo usuário
const User = require("../models/User");
// importe do Router do express para definir as rotas
const router = express.Router();

// rota de cadastro
router.post("/register", async (req, res) => {
  // criar um novo usuário quando chamar essa rota
  try {
    const user = await User.create(req.body);
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao registrar" });
  }
});

module.exports = app => app.use("/auth", router);
