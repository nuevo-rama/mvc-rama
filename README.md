# MVC Modelo Vista Controlador
---------
### Proyecto basado en la arquitectura MVC (Modelo - Vista - Controlador)

#### Node / Express / EJS
---------

1. Crear el repositorio
2. Clonar el repositorio:

`git clone [url del repositorio]`

3. Inicializar npm ejecutando el siguiente comando:

`npm init -y`

4. Definir como punto de entrada a la aplicación app.js
- Dentro del package.json:

`"main: app.js",`

5. Instalar express en el proyecto ejecutando el siguiente comando:

`npm install express --save`

6. Crear el archivo app.js
- Requerir Express
- Confirgurar el servidor

7. Crear la estructura de carpetas

------
## Vistas

1. Instalar ejs

`npm i ejs`

2. Configurar EJS como el template engine en app.js

`app.set("view engine", "ejs")`

3. Configurar el acceso a la carpeta de recursos estáticos

`app.use (express.static(publicPath));`

4. Renderizar utilizando res.render en el mainController

`res.render("index");`

--------------------

## Controladores










