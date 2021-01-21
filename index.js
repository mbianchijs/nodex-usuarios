var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')

var app = express()
var users = require('./app/routers/rtsUsers')
var port = process.env.port || 3005

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//app.use('/public',express.static(__dirname + '/public'))

//Habilitar Cors

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested, Content-Type, Accept")
    next()
})

app.all('/loco*', (req, res, next) => {
    console.log('Para esta sección no se requiere autenticación')
})

app.use('/app', users)



app.listen(port, () => {
    console.log(`Funcionando ${port}`)
})