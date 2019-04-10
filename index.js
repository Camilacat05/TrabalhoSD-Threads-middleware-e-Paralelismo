const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/servidor3', (req, res) => {
    let palavra = req.body.palavra;
    let palavraResult = '';
    let concat = palavra.split(" ");
    concat.forEach((element, index) => {
        palavraResult +=element;
        if(index == concat.length - 1) {
            res.send({ palavra: palavraResult });
        }
    });
});

app.listen(3002, () => {
    console.log("Servidor online!");
});