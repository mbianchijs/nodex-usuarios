var express = require('express')
var ctrlUsers = require('../controllers/ctrlUsers')
var ctrlLogin = require('../controllers/ctrlLogin')
var Users = require('../models/Users')
var mdwUsers = require('../mdws/mdwUsers')
var mdwJWT = require('../mdws/mdwJWT')
var users = express.Router()
var expressValidator = require('express-validator')

users.use(expressValidator({
    customValidators: {

        //COMPRUEBA LA EXISTENCIA DEL USUARIO A REGISTRAR, DE EXISTIR, DA ERROR,
        //EN CASO CONTRARIO, LO DEJA REGISTRARSE
        usuarioDisponible: (username) => {

            var promesa = new Promise((resolve, reject) => {
                Users.getUser(username, (err, row) => {
                    if (err) throw err
                    if (row.length > 0) {
                        reject()
                    }
                    else {
                        resolve()
                    }
                })

            })

            return promesa.then((result) => { })
        }
    }
}))
//users.all('*', ctrlLogin.login)
users.get('/privado', mdwJWT.verificaHeader, (req, res) => {
    console.log('Pasó la verificación con éxito')
    console.log(req.usuario)
    res.status(200).send({ 'mensaje' : 'Pasó la verificación con éxito'})
})
users.post('/privado', ctrlLogin.login, (req, res) => {
    console.log('Token obtenido')
    res.status(200).send({ 'mensaje' : 'Token obtenido'})
})
users.get('/users', ctrlUsers.getUsers)
users.get('/users/:username', ctrlUsers.getUser)
users.post('/users/', mdwUsers.frmAddUser, ctrlUsers.addUser)
users.put('/users/:username', ctrlUsers.editUser)
users.delete('/users/:username', ctrlUsers.delUser)

module.exports = users