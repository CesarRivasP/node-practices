// Async Await
//Ayuda a resolver los problemas encontrados con los callbacks y las cadenas
//Nos permite tener un codigo aun mas simple y facil de mantener

let getName = async() => {
  // undefined.name; Para provocar un error

  //Para disparar otro tipo de error
  // throw new Error(`No existe un nombre para ese usuario`); //dispara algo¿?

  return 'Cesar';
}
//Al agregarle async indicamos que es asincrono lo que estamos manejando
//En este caso retorna un promesa con el resultado de la funcion

// El ejemplo anterior es equivalente a :
// let getName = () => {
//   return new Promise( (resolve, reject) => {
//     resolve(`Fernando`)
//   });
// }

// console.log(getName());
getName()
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(`Error de async`, err);
    // console.log(`Error de async`); //si se le quita la refenrecia al error que esta llegando solo desplegaria el
    //Comentario puesto y no un log del error como tal
  })


//Solo basta con agregar async para transformar toda la funcion en una promesa
//Lo que sea que retorne la funcion va a ser el resolve de si se estuviera declarando de manera convencional
//Cualquier error que haya en la funcion va a inicializar el catch
