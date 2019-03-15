const fs = require('fs');

// La otra forma de aplicar el module
// module.exports.createFile = (base) => {
let createFile = (base, limit = 10) => {

  return new Promise((resolve,reject) => {

    if (!Number(base)){ //si no es un numero
      reject(`El valor ingresado ${base} no es un numero`);
      return; //para que no se siga ejecutando el codigo
    }

    let data= '';

    for(let i = 1; i <= limit; i++){
      // console.log(`${base} * ${i} = ${base * i}`);
      data += `${base} * ${i} = ${base * i}, \n`;
    }

    // fs.writeFile(nombreArchivo o PATH, data[, options como utf-8 ...], callback)
    fs.writeFile(`./tables/table-${base}.txt`, data, (err) => {
      if (err)
        reject(err);
      else
        resolve(`table-${base}.txt`)
    })
  })
}

let listarTable = (base, limit) => {

  for(let i = 1; i <= limit; i++){
    // console.log(`${base} * ${i} = ${base * i}`);
    console.log(`${base} * ${i} = ${base * i}`);
  }
}

// Esta es una forma de aplicar el module
module.exports = {
  //Esta es mejor cuando se tienen multiples funciones
  createFile,   // createFile: createFile
  listarTable
}
