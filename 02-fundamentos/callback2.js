let employees = [
  { id: 1, name: 'Vinicius' },
  { id: 2, name: 'Benzema' },
  { id: 3, name: 'Modric' }
];

let salaries = [
  { id: 1, salarieEm: 1000 },
  { id: 2, salarieEm: 2000 }
];

//Obtener un empleado por el id
let getEmployee = (id, callback) => {
  //Para buscar en un array. Va a barrer el arreglo, pero por cada
  //iteracion se va a obtener un usuario
  let employeeDB = employees.find((employee) => employee.id === id);

  // console.log(employeeDB);

  if( !employeeDB ) { //si no existe
    callback(`No existe un empleado con el id: ${id}`);
  }
  else {
    callback(null, employeeDB); //null porque no hay ningun error
  }
};

getEmployee(1, (err, employee) => {

  if ( err ) {
    return console.log(err);
  }

  console.log(employee);

});

let getSalaries = (id, callback) => {

  let employeeDB = employees.find((employee) => employee.id === id);

  let employeeSalaries = salaries.find((salarie) => salarie.id == id );
  // console.log(employeeSalaries);
  if (!employeeSalaries){
    return console.log(`No hay salarios disponibles con ese id ${id}`);
  }
  else {
    callback(null, employeeDB, employeeSalaries)
  }

}

// getSalaries(2);

getSalaries(3, (err, employee, salarie) => {

  let salariesEmployees = employee;

  console.log(salarie.id + 'Aqui estan los empleados');
  
  if( salarie.id === salariesEmployees.id) {
    return console.log(`El salario  del empleado ${salariesEmployees.name} es equivalente a ${salarie.salarieEm}`);
  }
});
