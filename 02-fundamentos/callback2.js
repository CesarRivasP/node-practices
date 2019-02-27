let employees = [
  { id: 1, name: 'Vinicius' },
  { id: 2, name: 'Benzema' },
  { id: 3, name: 'Modric' }
];

let salaries = [
  { id: 1, salarie: 1000 },
  { id: 2, salarie: 2000 }
];

// //Obtener un empleado por el id
// let getEmployee = (id, callback) => {
//   //Para buscar en un array. Va a barrer el arreglo, pero por cada
//   //iteracion se va a obtener un usuario
//   let employeeDB = employees.find((employee) => employee.id === id);
//
//   // console.log(employeeDB);
//
//   if( !employeeDB ) { //si no existe
//     callback(`No existe un empleado con el id: ${id}`);
//   }
//   else {
//     callback(null, employeeDB); //null porque no hay ningun error
//   }
// };
//
// let getSalaries = (id, callback) => {
//
//   let employeeDB = employees.find((employee) => employee.id === id);
//   // let employeeDB = employeeDataBase(employees);
//
//   let employeeSalaries = salaries.find((salarie) => salarie.id == id );
//   // console.log(employeeSalaries);
//   if (!employeeSalaries){
//     return console.log(`No hay salarios disponibles con ese id ${id}`);
//   }
//   else {
//     callback(null, employeeDB, employeeSalaries)
//   }
//
// }
//
// getEmployee(1, (err, employee) => {
//
//   if ( err ) {
//     return console.log(err);
//   }
//
//   console.log(employee);
//
// });
//
// getSalaries(1, (err, employee, salarie) => {
//
//   let salariesEmployees = employee;
//
//   if( salarie.id === salariesEmployees.id) {
//     // return console.log(`El salario  del empleado ${salariesEmployees.name} es equivalente a ${salarie.salarieEm}`);
//     return console.log(salariesEmployees.name, salarie.salarieEm);
//   }
// });

// const employeeDataBase = (employees) => {
//   return employees.find((employee) => employee.id === id);
// }

// --------------------------------------------------------------------- //

// Solucion al ejercicio en limpio

let getEmployee = (id, callback) => {

  let employeeDB = employees.find((employee) => employee.id === id);

  if( !employeeDB ) { //si no existe
    callback(`No existe un empleado con el id: ${id}`);
  }
  else {
    callback(null, employeeDB); //null porque no hay ningun error
  }
};

let getSalaries = (employee, callback) => {

  // let employeeDB = employees.find((employee) => employee.id === id);

  let salarieDB = salaries.find((salarie) => salarie.id == employee.id );

  if (!salarieDB){
    callback(`No se encontro un salario para el empleado ${employee.name}`);
  }
  else {
    // callback(null, employeeDB, salarieDB)
    //En los callbacks noramlmente se pueden retornar los datos de varias maneras, pero se acostumbra
    //que cuando se llame una respuesta, sea un objeto si tiene mas de una propiedad
    callback(null,
      {
        id: employee.id,
        name: employee.name,
        salarie: salarieDB.salarie
      })
  }

}

getEmployee(2, (err, employee) => {

  if ( err ) {
    return console.log(err);
  }

  // console.log(employee);
  getSalaries(employee, (err, response) => {
    if(err){
      return console.log(err);
    }

    console.log(`El salario de ${response.name} es de ${response.salarie}$`);
  })
});
