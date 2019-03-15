// console.log(module);

// const argv = require('yargs').argv;  //test
const argv = require('yargs')  //after
                .command('crear', 'Crea una nueva tabla de multiplicar',
                  {
                    base: {
                      demand: true, //valor obligatorio
                      alias: 'b'
                    },
                    limite: {
                      alias: 'l',
                      default: 10   //valor por defecto
                    }
                  }
                )
                .command('listar', 'Imprime en consola la tabla de multiplicar',
                  {
                    base: {
                      demand: true, //valor obligatorio
                      alias: 'b'
                    },
                    limite: {
                      alias: 'l',
                      default: 10   //valor por defecto
                    }
                  }
                )
                .help() //imprime en consola lo que hace el comando, opciones posibles
                .argv;

// const multiply = require('./multiply/multiply'); forma normal
const { createFile, listarTable } = require('./multiply/multiply');

// console.log(multiply);// { createFile: [Function: createFile] }

// console.log(process.argv); // objeto global

// console.log(argv1); argv de los procesos

// let param = argv[2];
// let base = param.split('=') -> se quiere separar por el signo de '=' -> ['--base', '5']
// let base = param.split('=')[1];
// console.log(base);

//argv = argumentos
// let argv1 = process.argv;
// console.log(argv);  argv de yargs -> { _: [ 'listar' ], base: 5, '$0': 'app' }. Retorna los comandos aislados
// en el primer array se encuentran todos los comandos aislados, luego van los flags afuera de ese array, pero
//en el objeto
// console.log(argv.base);
// console.log('Limite', argv.limite);
console.log(argv);

let comando = argv._[0];

switch(comando) {
  case 'listar':
    console.log('listar');
    listarTable(argv.base, argv.limite)
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
    break;
  case 'crear':
    console.log('crear');
    createFile(argv.base, argv.limite)
      .then((file) => console.log(`Archivo creado ${file}`))
      .catch((err) => console.log(err));
    break;
  default:
    console.log('Comando no reconocido');
}

// createFile(base)
//   .then((file) => console.log(`Archivo creado ${file}`))
//   .catch((err) => console.log(err));

/*
* Node nos permite Grabar esta tabla de multiplicar y crear un archivo de texto con ese valor
* Los arrchivos base de las app de node deben de ser lo suficientemente simples, sin demasiada logica
* Al agregar el argumento en el argv este quedaria en el 3 puesto,
segundo del array, puesto que antes esta el path de node y el PATH del archivo a ejecutar
* split es para separar elementos, para convertir de un string a un array
* _ es para hacer referencia al array que esta dentro del objeto

*/
