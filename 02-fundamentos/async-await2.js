//Practica 2 - Async Await

//De manera antigua
// let getName = async function() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Cesar');
//     }, 3000);
//   })
// }

let getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Cesar');
    }, 3000);
  })
}

let greeting = async () => {
  // return `Hello ${name}`;  //este name tiene que ser el resoltado de la funcion getName()
  //Y para obtenerlo habria que llamar a la promesa, ejecutar el then, obtener el valor, llamar en el callback
  // del then,..... muchos pasos para una tarea que se puede resolver con el await

  // let name = getName().then() //getname por defecto regresa una promesa, por lo que habria que hacer un then
  //Pero eso se puede evitar. La promesa al final resulve el name, al retornar el name se le puede poner await
  let name = await getName();
  //Esto hace que las funciones que regresan promesas tengan la sensacion de que son trabajos sincronos, en el mismo hilo
  //js no va a continuar la ejecucion de esta funcion hasta que no tenga la respuesta del getName()
  //Si no responde nada, se quedara pegado alli. Precaucion
  return `Hello ${name}`
}

// getName()
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
greeting()
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  })

//Para usar el await este tiene que estar dentro de una funcion async
//Los async pueden estar solos
