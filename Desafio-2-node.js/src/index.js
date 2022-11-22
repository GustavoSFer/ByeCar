const express = require('express');
const controller = require('./Controller');

const app = express();
const PORT = 3001;

app.use('/', controller.getAll);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});
