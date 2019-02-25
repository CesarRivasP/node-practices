let name = 'Deadpool';
let real = 'Wade Winston';

console.log(name + ' ' + real);
console.log(``);
console.log(`With template string: ${name} ${real}`);
console.log(`${1 + 2}`);
// back tips ? -> ``
// se puede ejecutar cualquier comando de javascript dentro de ${}

let fullName = name + ' ' + real;
let nameTemplate = `${name} ${real}`;
// equivalen a lo mismo
console.log(fullName === nameTemplate); // -> true

const getName = () => {
  return `${name} ${real}`;
}

console.log(`el nombre de: ${ getName() }`);
