function ocultarSenha(senha){
    var sha1 = require('sha1');
    console.log(senha);
    var hash = sha1(senha);
    return hash;
}
module.exports = {ocultarSenha}