//Destructuring
let deadpool = {
  name: 'Wade',
  lastName: 'Winston',
  skills: 'regeneration',
  //forma usual de realizar esta funcion
  getName: function() {
    return `${this.name} ${this.lastName} - poder: ${this.skills}`
  }
  //forma aplicando funcionalidades de es6
  // getName() {
  //   return `${this.name} ${this.lastName} - poder: ${this.skills}`
  // }
};
//this para hacer referencia al objeto

console.log(deadpool.getName());

// -------------------------------------------- //

//Para obtener valores del objeto
let name = deadpool.name;
let lastName = deadpool.lastName;
let skills = deadpool.skills;

//Todo eso es equivalente a esto usando Destructuring
let { name, lastName, skills } = deadpool;

console.log(name, lastName, skills);

// -------------------------------------------- //

//Para cambiar un nombre
let { name: firstName, lastName, skills } = deadpool;

console.log(firstName, lastName, skills);
