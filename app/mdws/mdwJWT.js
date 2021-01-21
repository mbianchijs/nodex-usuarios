var jwt = require('jwt-simple')
var moment = require('moment')
var configJWT = require('../../config/JWT')

module.exports.generaToken = (usuario) => {

    var payload = {
        sub : usuario[0].username,
        iat : moment().unix(),
        exp : moment().add(2, "minutes").unix(),
        lvl : usuario[0].nivel
    }
    return jwt.encode(payload, configJWT.TOKEN_PASS)

}

module.exports.verificaHeader = (req, res, next) => {

    if(!req.headers.authorization){
        res.status(403).send({ mensaje : 'Su petición no posee una cabecera de autorización'})
    }

    var token = req.headers.authorization
    var payload = jwt.decode(token, configJWT.TOKEN_PASS)
    console.log(payload)

    if(payload.exp <= moment().unix()) {
        res.status(401).send({mensaje : 'Token vencido'})
    }

    req.usuario = payload.sub
    next()
}