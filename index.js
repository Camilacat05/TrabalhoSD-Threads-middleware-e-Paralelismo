const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/servidor2', (req, res) => {
    let palavra = req.body.palavra;
    palavra = palavra.toUpperCase(); // converte para maiúscula
    res.send({ palavra: palavra });
});

app.listen(3001, () => {
    console.log("Servidor online!");
});