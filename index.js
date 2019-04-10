const request = require('request'); //fazer requisições a servidores
const threads = require('threads').spawn; //biblioteca para trabalhar com threads no node.js

class Palavra {
    constructor() {
    }

    async palavraRecebe(req, res) { //método que recebe a requisição do app, cria uma thread e abre um canal, dentro do canal envia duas requisições (servidor 1 e servidor 2), e após receber a resposta dos dois, retorna essa resposta para a aplicação cliente que fez a requisição.
        const thread = threads((input, done) => { //cria a thread
            done();
        });
        thread.send().on('message', async (response) => {
            const palavra = req.body.palavra;
            await this.pegaPalavras(palavra, res);
            thread.kill(); // encerra a thread
        })
            .on('error', function (error) {
                console.error('Worker errored:', error);
            })
            .on('exit', function () {// quando encerra a thread vem pra cá
                console.log('Worker has been terminated.');
            });
    }
    // envia as requisições aos dois servidores (chama os dois métodos responsáveis pelo envio das requisições)
    async pegaPalavras(palavra, res) {
        let palavraCaixaAlta = await this.caixaAlta(palavra);
        let palavraConcatenada = await this.concat(palavra);
        res.send({ palavraCaixaAlta: palavraCaixaAlta, palavraConcatenada: palavraConcatenada });
    }

    async caixaAlta(palavra) {
        return new Promise((resolve, reject) => {
            request.post('http://192.168.43.228:3001/servidor2', {
                json: {
                    palavra: palavra
                }
            }, (error, resp, body) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(body.palavra);
                }
            });
        });
    }
    async concat(palavra) {
//requisições ao servidores
        return new Promise((resolve, reject) => {
            request.post('http://192.168.43.21:3002/servidor3', {
                json: {
                    palavra: palavra
                }
            }, (error, resp, body) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(body.palavra);
                }
            });
        });
    }
}

export default Palavra;
