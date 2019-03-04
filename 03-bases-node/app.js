// Hay tres tipos de require
const fs = require('fs'); //de un proyecto propio en node, es decir, solo definimos dicha libreria porque
//la misma es nativa de node

// const express = require('express'); No es una libreria que es propia de node, es decir, es un paquete
// que se instala para su posterior utilizacion. No nativo de node, son expansiones, etc
// const fs = require('fs'); archivos que creamos en el proyecto, se identifican pro ('./PATH')


// tabla de multiplicar
let base = 6;

let data= '';

for(let i = 1; i <= 10; i++){
  console.log(`${base} * ${i} = ${base * i}`);
  data += `${base} * ${i} = ${base * i} \n`;
}

// fs.writeFile(nombreArchivo o PATH, data[, options como utf-8 ...], callback)
fs.writeFile(`./tables/table-${base}.txt`, data, (err) => {
  if (err) throw err; //si existe un error, mostramos el error

  console.log('The file has been saved!');  //Si no, se indica que se creo el archivo
})

//Node nos permite Grabar esta tabla de multiplicar y crear un archivo de texto con ese valor
