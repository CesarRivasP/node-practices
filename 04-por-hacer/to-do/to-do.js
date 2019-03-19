// Se utilizara el filesystem porque se necesita guardar la informacion en algun lugar fisico
const fs = require('fs');


// Todas las notas van a ser almacenadas en un array, este nos va a permitir mostrar listados y trabajar
// con cada una de las notas de forma independiente, entre otras cosas
//todo = por hacer
const todoList = [];

const saveDB = () => {
  //data a grabar =
  let data = JSON.stringify(todoList)

  fs.writeFile(`./db/data.json`, data, (err) => {
     if (err)
       // reject(err);
       console.log('No se pudo grabar', err);
     else
       console.log('Saved');
       // resolve(`table-${base}.txt`)
  })
}

const create = (descripcion) => {
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
