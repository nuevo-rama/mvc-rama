//Requerimos Express
const express = require ("express");

//Invocamos la función
const app = express();

//En la constante app tendremos disponibles todos los métodos del framework

//Configuramos el servidor

app.listen (3000, () => {
    console.log ("Servidor funcionando correctamente en el Puerto 3000");
});