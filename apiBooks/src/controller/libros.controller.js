const router = require("../routes/libros.routes");
const connection = require("../routes/database");

function getLibros(request,response)
{
    console.log(request.query)
    let sql = " SELECT * FROM libro WHERE id_usuario = \"" + request.query.id_usuario + "\" "  ;

    console.log(sql);
    connection.query(sql,function(error,result)
    {
            console.log(result);
            if(error)
            console.log(error);
            else
            response.send(result)
        
    })
}

function getLibros2(request,response)
{
    console.log(request.query)
    let sql = " SELECT * FROM libro WHERE id_libro = \"" + request.query.id_libro + "\"  AND id_usuario = \"" + request.query.id_usuario + "\" ";

    console.log(sql);
    connection.query(sql,function(error,result)
    {
            console.log(result);
            if(error)
            console.log(error);
            else
            response.send(result)
        
    })
}

function postLibros(request,response)
{
    console.log(request.body);
    let sql = "INSERT INTO libro (id_usuario, titulo, tipo, autor, precio, foto) " + "VALUES (\"" + request.body.id_usuario+ "\", \"" + request.body.titulo + "\",\"" + request.body.tipo + "\",\"" + request.body.autor + "\" ,\"" + request.body.precio + "\", \"" + request.body.foto + "\")";
    console.log(sql);
    connection.query(sql, function(error,result)
    {
        if (error)
        console.log(error)
        else
        {
            console.log(result);
            if(result.insertId)
            response.send(String(result.insertId));
            else
            response.send ("-1")
        }
    })
}

function putLibros(request,response)
{
    console.log(request.body);
    let params =
    [
        request.body.titulo,
        request.body.tipo,
        request.body.autor,
        request.body.precio,
        request.body.foto,
        request.body.id_libro
    ]

    let sql = " UPDATE libro SET titulo = COALESCE(?, titulo) , " + " tipo = COALESCE(?, tipo) , " +"autor = COALESCE(?, autor) , " +"precio = COALESCE(?, precio) , " +"foto = COALESCE(?, foto) WHERE id_libro = ?";
    console.log(sql);
    connection.query(sql,params,function(error, result)
    {
        if(error)
        console.log(error)
        else
        {
            response.send(result)
        }

    })
}

function delLibros(request,response)
{
    console.log(request.body);
    let sql = "DELETE FROM libro WHERE id_libro = \""+ request.body.id_libro+"\"";
    console.log(sql);
    connection.query(sql,function(error,result)
    {
        if(error)
        console.log(error);
        else
        {
            console.log(result)
            response.send(result);
        }
    })
}

module.exports = {getLibros,getLibros2,postLibros,putLibros,delLibros}


