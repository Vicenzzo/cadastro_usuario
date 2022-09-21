async function connect(){
    //Confirma se está conectado com a variavel global
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root@localhost:3306/webII");
    console.log("Conectou no Mysql");
    global.connection = connection;
    return connection;
    
}

async function selectUsuario(){
    const conn = await connect();
    const[rows] = await conn.query('SELECT * FROM usuario;');
    return rows;
}
module.exports = {selectUsuario}