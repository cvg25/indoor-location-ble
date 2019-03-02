var express = require('express')
var app = express();
var router = require('./router')
var bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', router)

app.get('*', (pet, res) => {
    res.status(200)
    res.send('Esto tira')
})

app.listen(PORT, () => console.log('Servidor express en el puerto: ' + PORT))
