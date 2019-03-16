const options = {
  base: {
    demand: true, //valor obligatorio
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10   //valor por defecto
  }
}

const argv = require('yargs')  //after
  .command('crear', 'Crea una nueva tabla de multiplicar', options)
  .command('listar', 'Imprime en consola la tabla de multiplicar', options)
  .help() //imprime en consola lo que hace el comando, opciones posibles
  .argv;

module.exports = {
  argv
}
