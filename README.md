# Bitacora investigacion html
## ¿Qué es HTML?
Significa HyperText Markup language y nos permite dar la estructura de una pagina web por medio de equiquetas.
Es el lenguaje de la web y en un estandar, su ultima version es HTMl5
## ¿Cómo funciona HTML?
Funciona por medio de etiquetas que pueden ser de autocierre como:

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <img src="imagen.jpg" alt="">

o de cierre como:

    <body>
        ....(contenido)
    </body>

    <div class="container">
    	....
    </div>

## ¿Cuál es la diferencia entre HTML y HTML semántico?
La diferencia es que en html semantico hacemos uso de etiquetas que estan hechas para cierto tipo de contenido como `<article>` o `<header>` en vez de solo usar `<div>`

<img src="https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%20%28114%29-65ee59e2-847d-43c8-866a-65233ebe6765.jpg" alt="imagen de ejemplo" width="200px">

## ¿Para qué sirve la etiqueta DOCTYPE?
No es una etuiqueta, es una declaracion y sirve para decirle a nuestro navegador que version de html vamos a usar en nustra pagina, si la ponemos estariamos usando la version 5 de html y podriamos usar etiquetas como `<canvas>`.
Si no la usamos le estariamos usando una version vieja de html que no tiene todas sus caracteristicas

## ¿Cuál es la diferencia entre la etiqueta `<HTML>` `<HEAD>` y `<BODY>` ?
`<HTML>`<br>
Es la etiqueta raiz de nuestro documento, es la que encierra todo.



`<HEAD>`<br>
Es la etiqueta donde ponemos la logica de nuetra pagina como puede ser `<meta> <link> <tittle> `, esta etiqueta no se dibuja.



`<BODY>`<br>
En esta etiqueta ponemos todos los elementos que compondran nuestra pagina, toso lo que este adentro de dibuja en pantalla.



## ¿Cuáles son las etiquetas básicas para controlar el texto en HTML?
Tenemos varias etiquetas como:
`<p>`<br>

Sirve para agregar texto o parrafos
`<h1> / <h6>`<br>

Sirven para agregar titulos y subtitulos, entre mas grande el numero de la etiqueta mas pequeño es titulo.
Ademas tenemos etiquetas como `<b> <i>` que sirven para dar formato a nuestro texto como negrilla y cursiva

## ¿Como definir una lista ordenada y no ordenada en HTML?
Para definir una lista ordenada usamos `<ol>` y se veria asi: 
<ol>
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ol>

Para definir una lista no ordenada usamos `<ul>` y se veria asi: 
<ul>
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ul>

como vemos la diferencia esta en las viñetas, la lista ordenada usa numeros y la otra usa formas, cabe resaltar que tenemos que utilizar la etiqueta `<li>item</li>` para cada item.

## ¿Cómo agregar links en HTML?
Para agregar un link usamos la etiqueta `<a href="">hipervinculo</a>` la cual tiene un atributo "href" donde colocaremos el link a donde nos dirige al dar click

## ¿Cuáles son las etiquetas semánticas?
Algunas de las etiquetas semanticas mas usadas son:
`<header>`<br>
Esta etiqueta se usa para los encabezados de una pagina



`<nav>`<br>
Esta etiqueta se usa para los menus de navegacion



`<article>`<br>
Esta etiqueta se usa para los contenidos de nuestra pagina, cada uno en una etiqueta nueva



`<aside>`<br>
Esta etiqueta se usa para contenidos laterales, como puede ser un banner publicitario



`<footer>`<br>
Esta etiqueta se usa para el pie de pagina donde ponemos informacion de la empresa



<img src="https://www.arkaitzgarro.com/html5/images/cap02/html5.png" alt="imagen de ejemplo" width="500px">

## ¿Cómo crear tablas en HTML?
Para crear una tabla usamos 4 etiquetas:
`<table>`<br>
Esta etiqueta crea la tabla



`<th>`<br>
Esta etiqueta es para los titulos de las columnas



`<tr>`<br>
Esta etiqueta es para definir las filas de la tabla



`<td>`<br>
Esta etiqueta es para definir los items de las celdas



La forma correcta de utilizarlo es la siguiente:

    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>
    </table>

Asi se veria la tabla:

<img src="https://i.ibb.co/mz8z6MD/tabla.png" alt="tabla">


## ¿Cómo crear un formulario y cuáles son los tipos de etiquetas inputs disponibles?
Los formularios se definen a traves de la etiqueta `<form action="url" method="get"></form>` que tiene dos atributos principales, "action" sirve para definir la url donde se enviaran los datos, mientras que "method" es para indicar si el contenido sera visible en la url o no, con get o post

Tenemos 4 etiquetas para formularios:

`<label for="mail">Correo electrónico:</label>`<br>
Esta etiqueta es para definir una etiqueta que suigiere que es lo que deberia ponerse en el input



`<input type="email" id="mail" name="user_mail">`<br>
Esta etiqueta es para definir las entradas del usuario, pueden ser de tipo numerico, texto, email, checkbox, radiobutton entre otros.
cada uno da una entrada diferente ademas de tener diferentes usos

<img src="https://i.ytimg.com/vi/MKSQYsLLFEo/maxresdefault.jpg" alt="imagen de ejemplo">



`<textarea id="msg" name="user_message"></textarea>`<br>
Esta etiqueta es para una entrada de texto que acepta muchas mas palabras



`<button type="submit">Envíe su mensaje</button>`<br>
Esta etiqueta es para crear el boton con el que enviaremos los datos





