//constante para el paquete de MySQL
const mysql = require('mysql');
//constante para el paquete Espress
const express = require('express');
//variable para los metodos de express
var app = express();
//constante para el paqeute de bodyparser
const bp = require('body-parser');

//Enviando los datos JSON a NodeJS API
app.use(bp.json());

// conectar a la base de datos (Mysql)
var mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'elisur',
    multipleStatements: true

})

//Test de conexion a base de datos
mysqlConnection.connect((err)=>{
    if(!err){
        console.log('Conexion Exitosa');

    }
    else{
        console.log('Error al conectar a la DB');
    }


})


