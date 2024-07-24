var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('./src/public'));

//mostrando a pagina index.ejs
app.get('/', function (request, response) {
    response.render('index');
});


//iniciando o servidor 
app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});
