const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});
/*
app.get('/perguntar', (req, res) => {
res.render('perguntar');
});
  
app.post('/salvarpergunta', (req, res) => {
let topic = {
    title: req.params.titulo, // campo do front-end
    message: req.params.message, // campo do front-end
};
console.log(topic)
res.send(`Formulário enviado para o servidor', ${topic}`);
});
*/

app.listen(9000, (erro) => {
  if(erro) {
    console.log('Erro ao executar o projeto, revise seu código');
  } else {
    console.log('Servidor rodando no endereço: http://localhost:9000');
  }
});