// tabla de multiplicar
// console.log(module);

// const multiply = require('./multiply/multiply'); forma normal
const { createFile } = require('./multiply/multiply');

// console.log(multiply);// { createFile: [Function: createFile] }

let base = '5';

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

createFile(base)
  .then((file) => console.log(`Archivo creado ${file}`))
  .catch((err) => console.log(err));

//Node nos permite Grabar esta tabla de multiplicar y crear un archivo de texto con ese valor
//Los arrchivos base de las app de node deben de ser lo suficientemente simples, sin demasiada logica
