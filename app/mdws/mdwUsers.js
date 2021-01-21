module.exports.frmAddUser = (req, res, next) => {

    req.checkBody({
        'usuario' : {
            notEmpty : {
                errorMessage : 'Debe ingresar un nombre de usuario'
            },
            isLength : {
                options : {min: 5, max: 15},
                errorMessage : 'Debe contener entre 5 a 15 caracteres'
            }
        },
        'nombre' : {
            notEmpty : {
                errorMessage : 'Debe ingresar un nombre'
            },
            isLength : {
                options : {min : 3, max : 30},
                errorMessage : 'Debe contener entre 3 a 30 caracteres'
            },
            isAlpha : {
                errorMessage : 'Solo se permite ingresar letras'
            }
        },
        'ciudad' : {
            notEmpty : {
                errorMessage : 'Debe ingresar una ciudad'
            },
            isLength : {
                options : {min : 3, max : 50},
                errorMessage : 'Debe contener entre 3 a 50 caracteres'
            }
        },
        'direccion' : {
            notEmpty : {
                errorMessage : 'Debe ingresar una dirección'
            },
            isLength : {
                options : {min : 5, max : 150},
                errorMessage : 'Debe contener entre 5 a 150 caracteres'
            }
        },
        'email' : {
            notEmpty : {
                errorMessage : 'Debe ingresar un email'
            },
            isEmail : {
                errorMessage : 'Email no válido'
            }
        },
        'passw' : {
            notEmpty : {
                errorMessage : 'Debe ingresar una constraseña'
            },
            isLength : {
                options : {min : 8, max : 20},
                errorMessage : 'Debe contener entre 8 a 20 caracteres'
            }
        },
        'nivel' : {
            notEmpty : {
                errorMessage : 'Debe ingresar un nivel'
            },
            isLength : {
                options : {min : 1, max : 1},
                errorMessage : 'Debe contener 1 caracter'
            },
            isNumeric : {
                errorMessage : 'Solo se permiten números'
            }
        }
    })
   req.check('usuario', 'Usuario existente').usuarioDisponible();
   req.check('cod_cirif', 'No es un formato correcto').matches(/^[VEJG][-][0-9]{8}(-[0-9])?$/)

   req.sanitizeBody('usuario').trim()
   req.sanitizeBody('nombre').trim()

    req.getValidationResult().then((result) => {
        if (!result.isEmpty()) {
            console.log(result.array())
            res.status(400).send(result.array())
            //console.log("Prueba de purificación: " + "|" + req.body.usuario + "|")
        } else {
            next()
        }
    })
}