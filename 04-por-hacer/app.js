const argv = require('yargs').argv;
// const colors = require('colors');

console.log(argv);

let command = argv._[0];

switch (command) {
  case 'crear':
    console.log('crear por hacer');
    break;
  case 'listar':
    console.log('listar todas las tareas por hacer');
    break;
  case 'actualizar':
    console.log('actualizar una tarea por hacer');
    break;
  default:
    console.log('Comando no reconocido');
    break;
}
