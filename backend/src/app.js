const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json()) // precisa estar antes do use(router) - permita dar json como resposta de request
// adicionar rotas ao app
// pode ser feito assim tbm: app.get('/tasks', (request, response) => response.status(200).send("Hello world!"))
app.use(router)

module.exports = app

