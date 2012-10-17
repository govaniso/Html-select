Html-select
===========

Plugin para la Manipulación del componente Select

Este plugins para jQuery permite la manipulación del componente HTML select, el cual nos ahorrara mucho trabajo en algunas tareas muy tediosas, inicial cuanta con las siguientes características:

* Seleccionar una opcion
* Eliminar una opción
* Cargar opciones enviando un objeto JSON
* Cargar opciones pasando la URL de donde obtendrá el formato JSON 

Queda pendiente
* Cargar las opciones mediante un array
* Cargar opciones (Json y array) y en el la misma función indicar cual se seleccionar por default.
En esta misma semana queda, no se preocupen.

## Seleccionando una opción de nuestro select

con la función $.select.setValue(idSelect, value) podemos seleccionar una opcion de un select, unida mente enviado el id y el valor del value que queremos seleccionar.

Nuestro JS
` $.select.setValue("idSelect", "febrero);`

Nuestro HTML

`<select id="idSelect" name="nameSalect">`

`    <option value="enero">Enero</option>`

`    <option value="febrero">Febrero</option>`

`    <option value="marzo">Marzo</option>`

`</select>`

##Remover una opción de nuestro select

Los parámetros enviados son iguales que $.select.setValue, pero con la diferencia que selera eliminada la opción que su value coincida el el parámetro enviado.
$.select.removeOption(idSelect, value)

## $.select.loadDataJsonAjax()

Carga los datos de un objeto Jsonen el combo
$.select.loadDataJsonAjax("idSelect", url);

Nuestro codigo JS
`$.select.loadDataJsonAjax("idSelect",'http://soyprogramador.liz.mx/getDatosJson/');`

Nuestro código HTML:
`<select id="idSelect" name="nameSalect"></select>`

Ejemplo del JSON obtenido desde una URL

`[{"value":"1","text":"Liderazgo"},{"value":"2","text":"Recursos Humanos"},{"value":"3","text":"Marketing"},{"value":"4","text":"Idiomas"}]`

## $.select.loadDataJson
$.select.loadDataJson("idSelect", json);

Funciona de manera similar que el anterior solo que los datos en formato **JSON**son pasados como parámetro.

Por cortesia de [soyprogramador.liz.mx](http://soyprogramador.liz.mx)