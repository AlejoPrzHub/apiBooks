let mysql = require("mysql2")
let connection = mysql.createConnection
({
        host:"127.0.0.1",
        user:"root",
        password:"Joseale12perez!",
        database:"appbooks"
});

connection.connect(function(error)
{
    if(error){console.log(error)}
    else{console.log("conexion correcta")}
})

module.exports = connection;