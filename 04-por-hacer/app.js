const argv = require('./config/yargs').argv;
const colors = require('colors');
const todo = require('./to-do/to-do')

let command = argv._[0];

switch (command) {
  case 'crear':
    let task = todo.create(argv.descripcion)
    console.log(task);
    break;
  case 'listar':
    let listing = todo.getListing();

    for ( let task of listing ) {
      console.log('=========== Por hacer ==========='.green);
      console.log(task.descripcion);
      console.log(`State: `, task.completado);
      console.log('================================='.green);
    }

    console.log('Lista un elemento por hacer');
    break;
  case 'actualizar':
    let update = todo.updateListing(argv.descripcion, argv.completado)
    console.log('Actualiza el estado completado de una tarea');
    console.log(update);
    break;
  default:
    console.log('Comando no reconocido');
    break;
}
