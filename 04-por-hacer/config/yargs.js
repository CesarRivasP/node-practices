const options = {
  descripccion: {
    demand: true,
    alias: 'd',
    desc: 'Descripccion de la tarea por hacer'
  },
  completado: {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
  }
}

const argv = require('yargs')
  .command('crear', 'Crear un elemento por hacer', options)
  .command('actualizar', 'Actualiza el estado completado de una tarea', options)
  .help()
  .argv;


module.exports = {
  argv
}
