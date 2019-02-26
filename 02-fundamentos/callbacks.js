//Callbacks
// Un Callbacks es una funcion que se ejecuta cuando algo sucede o despues de algo
//Esta funcion es un Callback
// setTimeout(() => {
//   console.log('hello world');
// }, 3000);

// -------------------------------------------------------------------- //

// let getUserById = (id, callback) => {
//
//   let user = {  //emulando una solicitud a la base de datos
//     name: 'Cesar',
//     id, //id: id
//   }
//
//   if( id === 20) {  //simuando que el id 20 no existe
//     callback(`El usuario con id: ${id} no existe en la base de datos`)
//   }
//   else {
//     callback(user);
//   }
//   //before
//   // callback(user); //ejecucion del Callback queriendo que retorne al usuario de base de datos
// }
//
// //Usuario id, que se quiere invocar cuando ya se tenga el usuario
// getUserById(1, (err, user /*Especificacion del callback*/)  => {
//
//   if(err){
//     return console.log(err);
//     //Se agrega el return para que cuando haya un error muestre el log y no se siga ejecutando el programa
//   }
//
//   console.log('Usuario de base de datos', user);  //No es una concatenacion, es poner otro argumento
// });

/*
- Normalmente este tipo de funciones que van a la base de datos y traen data, y por ello estas instrucciones al
llamarse pueden regresar un error. En este tipo de peticiones puede ocurrir que el usuario con un id determinado
no exista, por lo que se implementan condicionales para filtrar casos especificos
- En la parte cuando se esta trabajando con getUserById no hay manera de saber cuando funciono correctamente y
cuando fallo. Para eso es muy comun que el primer parametro de un callback siempre sea el 'error'
*/


// --------------- //
//Code Clean

let getUserById = (id, callback) => {

  let user = {
    name: 'Cesar',
    id,
  }

  if( id === 20) {  //simuando que el id 20 no existe
    callback(`El usuario con id: ${id} no existe en la base de datos`)
  }
  else {
    // callback(user); //aqui siempre se esta regeresando un parametro, el usuario
    //Pero al ejecutarse, llega hasta el condicional del error y no muestra el log que esta despues,
    //cosa que no deberia, puesto que no hay un error en la peticion.
    //Para corregir ese error, se necesita diferenciar que esta peticion es correcta
    // Y eso se hace colocando null o undefined como primer parametro
    callback(null, user); //Asi especifcamos que el primer argumento que le pasamos a la funcion -> (err)
    // no existe
  }
}

getUserById(5, (err, user)  => {

  if(err){
    return console.log(err);
  }

  console.log('Usuario de base de datos', user);
});

//Esta es una forma de utilizar los callbacks, es usual que nos den una funcion, mandamos los parametros
//necesarios, y la respuesta por lo general es un error en caso de que suceda y posteriormente la informacion
//que deseamos
