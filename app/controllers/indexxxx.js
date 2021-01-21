var fs = require('fs')
var path = require('path')

var ctrls = fs.readdirSync(__dirname)

ctrls.forEach((ctrl) =>{

    var ctrlName = path.basename(ctrl, '.js')

    if (ctrlName !== 'index'){

        exports[ctrlName] = require('./' +  ctrlName)
    }
    console.log(exports)
})