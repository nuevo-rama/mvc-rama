//Requerimos Express
const express = require ("express");

//Invocamos la función
const app = express(); //En la constante app tendremos disponibles todos los métodos del framework

const path = require ("path"); //resuelve rutas
const publicPath = path.resolve(__dirname, "./public"); //para que pueda resolver siempre la ruta a public

//Para poder usar los  recursos estaticos de la carpeta public
app.use (express.static(publicPath)); 


//Configuramos el servidor
app.listen (3000, () => {           
    console.log ("Servidor funcionando correctamente en el Puerto 3000");
});

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs") //configurar ejs como template engine

const indexRouter = require("./routes/mainRoutes") 

app.use("/", indexRouter);

