
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
      resolve(employeeDB)
    }
  });
}
//Encadenar promises
getEmployee(2)
  .then((employee) => {
      //Esto regeresara una promesa
      return getSalaries(employee)
      //si se hace un return de otra promesa, entonces se puede hacer otro then que va a tener la respuesta de los especificado
  })
  .then((response) => {
    console.log(`El salario de ${response.name} es de ${response.salarie}`);
  })
  .catch((err) => console.log(err))


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

//Siempre que se haga un return dentro de una promesa, quiere decir que el siguiente then corresponde a la
//respuesta de esa promesa
