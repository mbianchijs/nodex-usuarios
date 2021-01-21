var mysql = require('mysql')
var configDB = require('../../config/database')

module.exports = {

    //DEVUELVE TODOS LOS USUARIOS
    getUsers: (err, rows) => {

        var db = mysql.createConnection(configDB)
        db.connect()
        users = db.query('SELECT * FROM USUARIOS', err, rows)
        db.end()
        return users
    },

    //DEVUELVE UN USUARIO DE ACUERDO A SU USERNAME
    getUser: (username, err, rows) => {

        var db = mysql.createConnection(configDB)
        db.connect()
        var cols = ['username', 'cod_cirif', 'nombre', 'ciudad', 'direccion', 'email', 'date_time_agg', 'nivel']
        user = db.query('SELECT ?? FROM ?? WHERE `username` = ? ', [cols, 'usuarios', username], err, rows)
        db.end()
        return user
    },

        //DEVUELVE UN USUARIO DE ACUERDO A SU USERNAME
    getUserLgn: (usuario, err, row, fields) => {

        var db = mysql.createConnection(configDB)
        db.connect()
        var cols = ['username', 'nivel']
        user = db.query('SELECT ?? FROM ?? WHERE `username` = ? AND `passw` = ? ', [cols, 'usuarios', usuario.username, usuario.passw], err, row)
        db.end()
        return user
    },

    //AGREGAR UN USUARIO
    addUser: (nuevoUser, err, results) => {
        var db = mysql.createConnection(configDB)
        db.connect()
        addUser = db.query('INSERT INTO `usuarios` SET ?', nuevoUser, err, results)
        db.end()
        return addUser
    },

    //ELIMINA UN USUARIO DE ACUERDO A SU USERNAME

    delUser: (err, results) => {
        var db = mysql.createConnection(configDB)
        db.connect()
        deletedUser = db.query('DELETE FROM `usuarios` WHERE `username` = ? ', [username], err, results)
        db.end()
        return deletedUser

    },

    //MODIFICA UN USUARIO DE ACUERDO A SU USERNAME

    editUser: (datosUser, err, results) => {
        console.log(datosUser)
        var db = mysql.createConnection(configDB)
        db.connect()
        editedUser = db.query('UPDATE `usuarios` SET ? WHERE username = ? ', [datosUser, username], err, results)
        db.end()
        return editedUser
    }

}