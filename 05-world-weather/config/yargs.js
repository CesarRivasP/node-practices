const argv = require('yargs')
  .options({
    address: {
      alias: 'd',
      desc: 'Direccion de la ciudad para obtener el clima',
      demand: true
    }
  })
  .argv;  //para obtener los argumentos

module.exports = {
  argv
}

// yargs ofrece una opcion que permite ingresar comandos directamente o configurar argumentos
// directamente en la raiz de la aplicacion o del comando
