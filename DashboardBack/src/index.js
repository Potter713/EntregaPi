const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Cria o App
const app = express();

// Liberar a Api
app.use(cors());

// Padroes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// Envia o App pra todos os controlers 
require('./app/controllers/index')(app);

// Porta da Api
app.listen(process.env.PORT || 3001);

