//var mysql = require('mysql')
//var configDB = require('../../config/database')
var Users = require('../models/Users')
var dateformat = require('dateformat')

module.exports = {

    getUsers: (req, res) => {

        Users.getUsers((err, rows, fields) => {
            if (err) { res.status(500).send({ 'usuario': `Ha ocurrido un error al consultar: ${err}` }) } else
            { rows.length > 0 ? res.status(200).send({ 'usuarios': rows }) : res.status(404).send({ 'usuarios': 'No existen' }) }
        })

    },

    getUser: (req, res) => {
        username = req.params.username
        Users.getUser(username,(err, row, fields) => {
            if (err) { res.status(500).send({ 'usuario': `Ha ocurrido un error al consultar: ${err}` }) } else
            { row.length > 0 ? res.status(200).send({ 'usuarios': row }) : res.status(404).send({ 'usuario': 'No existe' }) }
        })
    },

    addUser: (req, res) => {
        var fechaactual = new Date();
        fechaactual = dateformat(fechaactual, 'yyyy-mm-dd hh:MM:ss')
        var nuevoUser = {
            username: req.body.usuario,
            cod_cirif: req.body.cod_cirif,
            nombre: req.body.nombre,
            ciudad: req.body.ciudad,
            direccion: req.body.direccion,
            email: req.body.email,
            date_time_agg: fechaactual,
            passw: req.body.passw,
            nivel: req.body.nivel
        }
        console.log(req.body.usuario)


        Users.addUser(nuevoUser, (err, results, fields) => {
            if (err) { res.status(500).send({ 'usuario': `Ha ocurrido un error al agregar: ${err}` }) } else
            { res.status(200).send({ 'usuario': 'Usuario agregado con éxito! ' }) }
        })
    },

    editUser: (req, res) => {
        username = req.params.username
        var datosUser = {
            cod_cirif: req.body.cod_cirif,
            nombre: req.body.nombre,
            ciudad: req.body.ciudad,
            direccion: req.body.direccion,
            email: req.body.email,
            passw: req.body.passw,
            nivel: req.body.nivel
        }
        Users.editUser(datosUser, (err, results, fields) => {
            if (err) res.status(500).send({ 'usuario': `Ha ocurrido un error al modificar: ${err}` })
            var affected = results.affectedRows
            affected > 0 ? res.status(200).send({ 'usuario': 'Modificado con exito' }) : res.status(404).send({ 'usuarios': 'Usuario no existente' })
        })
    },

    delUser: (req, res) => {
        username = req.params.username
        Users.delUser((err, results, fields) => {
            if (err) res.status(500).send({ 'usuario': `Ha ocurrido un error al eliminar: ${err}` })
            var affected = results.affectedRows
            affected > 0 ? res.status(200).send({ 'usuarios': 'Eliminado con exito' }) : res.status(404).send({ 'usuarios': 'Usuario no existente' })
        })
    }

}