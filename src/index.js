// definição do express
const express = require("express");

const bodyParser = require("body-parser");

//criando a aplicação simplremente chamando a função express
const app = express();

//indicando que o body-parser será usando

app.use(bodyParser.json()); // para entender as informações enviadas para API em json
app.use(bodyParser.urlencoded({ extended: false })); // para entender quando for passado parametros via url

// ROTAS
require("./controllers/authController")(app); // objeto que é definido uma vez

app.listen(27017); // definindo a porta da aplicação
