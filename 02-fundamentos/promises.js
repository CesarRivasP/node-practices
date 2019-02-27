//Las promesas nos permiten ejecutar un trabajo ya sea sincrono o asincrono y despues de que se resuelva la
//tarea realizar un trabajo en particular
// Las promises son una caracteristica nueva de es6, se pueden utilizar perfectamente en node
//new Promise() lleva dentro 3 callbacks, resolve y reject y el cuerpo de la promesa
//resolve se va a llamar si la promesa es exitosa, es decir, si logra encontrar un empleado
//reject se va a llamar si la promesa no es exitosa, es decir, no encuentra un empleado en la DB
// Los nombres resolve y reject son opcionales, pero es un estandar llamarlos de dicha manera
let employees = [
  { id: 1, name: 'Vinicius' },
  { id: 2, name: 'Benzema' },
  { id: 3, name: 'Modric' }
];

let salaries = [
  { id: 1, salarie: 1000 },
  { id: 2, salarie: 2000 }
];

let getEmployee = (id) => {

  return new Promise((resolve, reject) => {
    //Cuando se llame la promesa, va a empezar a ejecutar este codigo
    let employeeDB = employees.find((employee) => employee.id === id);

    if(!employeeDB){
      reject(`No existe un empleado con el ID ${id}`);
    }
    else {
      // resolve(null, employeeDB);
      //En resolve no se pueden mandar dos argumentos o mas, solo se puede retornar uno
      //si se necesita mandar mas de un dato, se tiene que regresar un objeto
      resolve(employeeDB)
    }
  });
}
//Cuando encuentra un empleado o sucede algun error
getEmployee(2)
  //Manera que venia utilizando
  // .then((employee) => console.log(`Empleado de DB`, employee))  //resolve
  // .catch((err) => console.log(err))  //reject
  .then(
    (employee) => {
      // console.log(`Empleado de DB`, employee);
      getSalaries(employee)
        .then(
          (response) => {
            // console.log(`Empleado de DB`, response);
            console.log(`El empleado ${response.name} tiene un salario de ${response.salarie}`);
          },
          (err) => console.log(err)
        )
    },
    (err) => console.log(err)
  )


let getSalaries = (employee) => {

  return new Promise((resolve,reject) => {

    let salarieDB = salaries.find((salarie) => salarie.id == employee.id );

    if (!salarieDB){  //si no existe
      reject(`No se encontro un salario para el empleado ${employee.name}`);
    }
    else {
      resolve({
        id: employee.id,
        name: employee.name,
        salarie: salarieDB.salarie
      });
      //Despues del reject o el resolve aun se sigue ejecutando codigo
      //porque no son un return
    }
  })

}
