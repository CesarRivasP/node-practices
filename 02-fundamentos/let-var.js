var name = 'Cesar';

if(true){
  var name = 'Jose';
}

//reinicializa el valor de la variable
var name = 'Cesar1';
var name = 'Cesar2';
var name = 'Cesar3';
var name = 'Cesar4';
//termina adoptando el valor de la ultima asignacion
var name = 'Cesar5';

console.log(name);

// -----------------------------------------

let name = 'Cesar';

if(true){
  name = 'Jose';
}

name = 'Cesar1';
name = 'Cesar2';
name = 'Cesar3';
name = 'Cesar4';
name = 'Cesar5';
//No lo permite, puesto que no se puede volver a inicializar
//Solo se puede cambiar su valor
console.log(name);

// -----------------------

for (var i = 0; i <= 5; i++){
  console.log(`i: ${i}`);
}
console.log(`i: ${i}`);
//llega hasta el 6 puesto que al llegar al 6 no cumple la condicion y sale del ciclo, sin embargo
//la varaible guarda ese valor
// -----------------------
let i;
for (let i = 0; i <= 5; i++){
  console.log(`i: ${i}`);
}
console.log(`i: ${i}`);
//como no se ha inicializado la i en este scope, declara que la i no esta definida
//para que sirva, hay que declarar let i, para que haya una declaracion en este scope
