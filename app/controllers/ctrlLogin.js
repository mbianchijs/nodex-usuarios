var Users = require('../models/Users')
var mdwJWT = require('../mdws/mdwJWT')

module.exports = {
    
    login : (req, res) => {
        var user = {
        username: req.body.username,
        passw: req.body.passw
    }
        
        Users.getUserLgn(user,(err, row) => {
            if (err) { res.status(500).send({ 'usuario': `Ha ocurrido un error al consultar: ${err}` }) } else
            { row.length > 0 ? res.status(200).send({ 'token' : mdwJWT.generaToken(row)  }) : res.status(404).send({ 'usuario': 'Usuario o contraseña errada' }) }
        })
    }

}