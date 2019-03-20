const options = {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
  },
  completado: {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
  }
}

const argv = require('yargs')
  .command('crear', 'Crear un elemento por hacer', options)
  .command('listar', 'Despliega la lista de tareas por hacer', {
    descripcion: {
      demand: false,
      alias: 'd',
      desc: 'descripcion de la tarea por hacer'
    }
  })
  .command('actualizar', 'Actualiza el estado completado de una tarea', options)
  .help()
  .argv;


module.exports = {
  argv
}
