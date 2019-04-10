const express = require('express');
const bodyParser = require('body-parser');
import Palavra from './index';

const app = express();
const index = new Palavra();
app.use(bodyParser.json());

app.post('/', (req, res) => index.palavraRecebe(req, res));

app.listen(3000, () => {
    console.log("Middleware online!");
});