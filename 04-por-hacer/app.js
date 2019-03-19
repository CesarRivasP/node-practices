const argv = require('./config/yargs').argv;
// const colors = require('colors');
const todo = require('./to-do/to-do')

let command = argv._[0];

switch (command) {
  case 'crear':
    let task = todo.create(argv.descripcion)
    console.log(task);
    break;
  case 'listar':
    console.log('Lista un elemento por hacer');
    break;
  case 'actualizar':
    console.log('Actualiza el estado completado de una tarea');
    break;
  default:
    console.log('Comando no reconocido');
    break;
}
