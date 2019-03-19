// Se utilizara el filesystem porque se necesita guardar la informacion en algun lugar fisico
const fs = require('fs');


// Todas las notas van a ser almacenadas en un array, este nos va a permitir mostrar listados y trabajar
// con cada una de las notas de forma independiente, entre otras cosas
//todo = por hacer
let todoList = [];

const saveDB = () => {
  //data a grabar =
  let data = JSON.stringify(todoList);

  fs.writeFile(`./db/data.json`, data, (err) => {
     if (err) throw new Error('No se pudo grabar', err);
  })
}

//hay que cargar el archivo data.json y retornarlo como listado por hacer
const loadDB = () => {
  //hay varias formas d eleer un archivo JSON
  //una puede ser hacer una peticion http para poder cargar ese archivo
  //como este es un lenguaje del lado del servidor, se puede hacer un require directamente de ese
  // archivo, y esa funcion al detectar que es un archivo JSON automaticamente lo serializa? y
  // convierte de un objeto de JS
  // todoList = require('../db/data.json'); AFTER
  try {
    todoList = require('../db/data.json');
  }
  catch (err) {
    todoList = [];
  }
  // console.log(module.exports.create);
}

const create = (descripcion) => {
  // todoList.push(todo); AFTER
  //Para que el crear siempre haga un append, o agregue lo nuevo al archivo, lo primero que se dberia
  // hacer antes del push es cagar la base de datos
  loadDB();

  let todo = {
    descripcion, // descripcion: descripcion
    completado: false //no se deben tener tareas por hacer que ya estan completas
  }

  todoList.push(todo);

  saveDB(); //recibe el todoList

  return todo;
}

module.exports = {
  create
}

//Es necesario volver persistente la informacion que se esta almacenando, para que prevalezca aun despues
// ejecutar el programa. Para hacerlo persistente
// JSON.stringify convierte un objeto a un json valido
