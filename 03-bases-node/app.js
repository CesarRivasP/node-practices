// console.log(module);

// const argv = require('yargs').argv;  //test
const argv = require('yargs')  //after
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
const { createFile } = require('./multiply/multiply');

// console.log(multiply);// { createFile: [Function: createFile] }

//after
// console.log(process.argv); // objeto global
//argv = argumentos
let argv1 = process.argv;

// console.log(argv);  argv de yargs -> { _: [ 'listar' ], base: 5, '$0': 'app' }. Retorna los comandos aislados
// console.log(argv.base);
console.log('Limite', argv.limite);

// console.log(argv1); argv de los procesos

// let param = argv[2];
// let base = param.split('=') -> se quiere separar por el signo de '=' -> ['--base', '5']
// let base = param.split('=')[1];

// console.log(base);

// createFile(base)
//   .then((file) => console.log(`Archivo creado ${file}`))
//   .catch((err) => console.log(err));




/*
* Node nos permite Grabar esta tabla de multiplicar y crear un archivo de texto con ese valor
* Los arrchivos base de las app de node deben de ser lo suficientemente simples, sin demasiada logica
* Al agregar el argumento en el argv este quedaria en el 3 puesto,
segundo del array, puesto que antes esta el path de node y el PATH del archivo a ejecutar
* split es para separar elementos, para convertir de un string a un array

*/
