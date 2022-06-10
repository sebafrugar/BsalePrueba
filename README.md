# BsalePrueba

<p> Proyecto creado para Bsale el cual consta de un listado de productos 
  proporcionado por la API facilitada por Bsale </p>


## Contenido 

<p> Proyecto presenta una carpeta server la cual lleva el back-end de la aplicacion en la cual se trabajo con
  MySql , express , cors y nodemon y una carpeta client en el cual se trabajo con HTML , CSS y Vanilla JS  </p>
  
## Clonacion de proyecto

<p> pasos a seguir :</p>
1. Primero utilizar el comando `git clone` y pogar el siguiente link https://github.com/sebafrugar/BsalePrueba.git </br>
2. Luego ingresar a la carpeta donde se clono el proyecto y utilizar el comando `npm i` para descargar las dependencias del proyecto


## Back End

1. se crea un keep-alive con un refresco de 4.9 segundos para no perder la conexion con el servidor en el cual se crea la conexion a la base de datos proporcionada y se realiza un setTimeout de una funcion get_next el cual obtiene todos los datos de la base de datos. </br>
2. se crea controlador para obtener todos los productos de la base de datos. </br>
3. se crea una routa para poder obtener una peticion get y traer datos desde la BD. </br>
4. el archivo **server.js** tiene la conexion con  express , cors y la coneccion de la app con las rutas y el puerto determinado. </br>


## Front End

1. se crean archivos HTML para distintas vistas con los articulos filtrados por categoria.</br>
2. Se crean archivos JS vinculados a las vistas HTML para generar filtros de busquedas y mostrar los articulos mediante map y filtros (finciones nativas de JS).</br>
3. se crea un archivo CSS general con funcion de colores para la vista activa de articulos.</br>


## Principales Funcionalidades 

1. muestra de todos los productos disponibles en la tienda.</br>
2. buscador el cual filtra productos segun busqueda.</br>
3. filtros de ordenamiento por abecedario , por valor (de menor a mayor y de mayor a menor) y por stock.</br>
4. links los cuales muestran solo una categoria de productos.</br>


## Mas proyectos y trabajos en

<h4> https://github.com/sebafrugar </h4>

