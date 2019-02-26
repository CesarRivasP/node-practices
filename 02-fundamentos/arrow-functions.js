// function sumar(a,b) {
//   return a + b;
// }
//
// console.log(sumar(10,20));

// -------------------------------------- //
//Una arrow function basicamente puede reemplazar a cualquier funcion normal

//Declaracion normal de una arrow function
// let sumar = (a,b) => {
//   return a + b;
// }

// Si todo el cuerpo de la funcion se puede escribir en una sola linea
// let sumar = (a, b) => a + b;
//
// console.log(sumar(10,20));

// -------------------------------------- //
//Exercise
// function saludar() {
//   return 'Hello world'
// }

//traduccion
// let saludar = (name) => `Hello ${name}`;
//
// console.log(saludar('Cesar'));
// ~
// let saludar = name => {
//   return `Hello ${name}`
// }

// -------------------------------------- //

let deadpool = {
  name: 'Wade',
  lastName: 'Winston',
  skills: 'regeneration',
  //forma usual de realizar esta funcion
  getName() {
    return `${this.name} ${this.lastName} - poder: ${this.skills}`
  }
};

console.log(deadpool.getName());
/*
- En las arrow functions el valor del this dentro de una arrow function apunta al valor que tenga
el objeto this fuera de la funcion. Este this apunta a un objeto vacio
- Al correr js en el navegador web, this apunta al objeto global 'window'.
- En node no se tiene window, la referencia equivalente es a global, que es basicamente parecido a window.
- En los casos que se necesita utilizar this dentro de objetos se puede declarar de la manera indicada
- Hay que estar muy pendiente de this, ya que este apunta a lo que valga this fuera de la funcion de flecha
*/
