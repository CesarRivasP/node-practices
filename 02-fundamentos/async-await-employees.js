//Employee Example

let employees = [
  { id: 1, name: 'Vinicius' },
  { id: 2, name: 'Benzema' },
  { id: 3, name: 'Modric' }
];

let salaries = [
  { id: 1, salarie: 1000 },
  { id: 2, salarie: 2000 }
];

let getEmployee = async (id) => {

  let employeeDB = employees.find((employee) => employee.id === id);

  if(!employeeDB){
    throw new Error(`No existe un empleado con el ID ${id}`);
  }
  else {
    return employeeDB;
  }
}

let getSalaries = async (employee) => {

    let salarieDB = salaries.find((salarie) => salarie.id == employee.id );

    if (!salarieDB){  //si no existe
      throw new Error(`No se encontro un salario para el empleado ${employee.name}`);
    }
    else {
      return {
        id: employee.id,
        name: employee.name,
        salarie: salarieDB.salarie
      };
    }
}

let getInformation = async (id_employee) => {
  //Esta funcion se va a encargar de proporcionar toda la info del empleado y del salario
  let employee = await getEmployee(id_employee);
  //aqui se va a esperar el resultado positivo, el resolve(el empleado)

  //Si se deja asi, habria que colocar los .then de la resolucion de la promesa y todo eso..
  // let response = getSalaries(employee);
  //por lo que ..
  let response = await getSalaries(employee);

  // console.log(employee);
  // console.log(response);
  return `${response.name} tiene un salario de ${response.salarie}$`;
  //Hay que agregarle la resolucion de la promesa a la invocacion de la funcion, si no no se visualizara nada
}

// getInformation(1);
getInformation(1) //esto es el equivalente al getEmployee de los callbacks
  .then((message) => console.log(message))
  .catch((err) => console.log(err));

  //El async indica que lo siguiente es una funcion que va a retornar una promesa
