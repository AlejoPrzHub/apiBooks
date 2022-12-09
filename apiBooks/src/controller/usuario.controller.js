const router = require("../routes/usuario.routes");
const connection = require("../routes/database");

function registroUsuario(request,response)
{
    console.log(request.body)

    let sql ="INSERT INTO usuario (nombre, apellidos, correo, url, password) " + "VALUES(\"" + request.body.nombre + "\", \"" + request.body.apellidos + "\",\"" + request.body.correo + "\",\"" + request.body.url + "\",\"" + request.body.password + "\")";

    console.log(sql);
    connection.query(sql,function(error,result)
    {
        if(error)
        console.log(error)
        else
        {
            console.log(result);
            if(result.insertId)
            response.send(String(result.insertId));
            else
            response.send("-1")
        }
    })
}

function loginUsuario(request,response)
{
    console.log(request.body)

    let sql ="SELECT nombre,apellidos,correo,url,id_usuario FROM usuario WHERE correo = \"" + request.body.correo + "\"  AND password = \"" + request.body.password + "\"   "

    connection.query(sql,function(error,result)
    {
        if(error)
        console.log(error, "LOS DATOS INTRODUCIDOS SON INCORRECTOS")
        else
        {
        response.send(result)
        }
    })
}

module.exports = {registroUsuario,loginUsuario};