// tabla de multiplicar
// console.log(module);

const argv = require('yargs').argv;  //after

// const multiply = require('./multiply/multiply'); forma normal
const { createFile } = require('./multiply/multiply');

// console.log(multiply);// { createFile: [Function: createFile] }
//before
// let base = '5';

// let data= '';
//
// for(let i = 1; i <= 10; i++){
//   console.log(`${base} * ${i} = ${base * i}`);
//   data += `${base} * ${i} = ${base * i} \n`;
// }
//
// // fs.writeFile(nombreArchivo o PATH, data[, options como utf-8 ...], callback)
// fs.writeFile(`./tables/table-${base}.txt`, data, (err) => {
//   if (err) throw err; //si existe un error, mostramos el error
//
//   console.log('The file has been saved!');  //Si no, se indica que se creo el archivo
// })

//after
// console.log(process.argv); // objeto global
//argv = argumentos
let argv1 = process.argv;

console.log(argv);  //argv de yargs -> { _: [ 'listar' ], base: 5, '$0': 'app' }. Retorna los comandos aislados

console.log(argv1); //argv de los procesos
//Al agregar el argumento en el argv este quedaria en el 3 puesto,
//segundo del array, puesto que antes esta el path de node y el PATH
//del archivo a ejecutar
// let param = argv[2];
// let base = param.split('=') -> se quiere separar por el signo de '=' -> ['--base', '5']
// let base = param.split('=')[1];

// console.log(base);

// createFile(base)
//   .then((file) => console.log(`Archivo creado ${file}`))
//   .catch((err) => console.log(err));

//Node nos permite Grabar esta tabla de multiplicar y crear un archivo de texto con ese valor
//Los arrchivos base de las app de node deben de ser lo suficientemente simples, sin demasiada logica
//split es para separar elementos, para convertir de un string a un array
