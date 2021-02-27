//array objetos. Cada objeto seerea un empleado con nombre, telefono, salario. Hayq ue sumar el salario tot al para ver cuanto tiene que pagar al empresa en salarios

let arrayEmpl =[]

let empleado1 ={
    nombre : 'Pablo',
    Telefono : `677777777`,
    Salario : 1000
}

let empleado2 ={
    nombre : 'Pilar',
    Telefono : '688888888',
    Salario : 2000
}

let empleado3 ={
    nombre : 'Pedro',
    Telefono : '666666666',
    Salario : 3000
}

arrayEmpl.push(empleado1);
arrayEmpl.push(empleado2);
arrayEmpl.push(empleado3);

function getSalarySum(array){

    return array.reduce((accumulator,currItem,index,array) => accumulator + currItem.Salario,0);

}

console.log(getSalarySum(arrayEmpl));

// Array de salarios

function getSalaryArray(array){
    let salaryArray = [];
    array.forEach(x => salaryArray.push(x.Salario));
    return salaryArray;
}
function getSalaryArrayReduce(array){

    return array.reduce((accumulator,currItem,index,array) => accumulator.concat(currItem.Salario),[]);

}


console.log(getSalaryArray(arrayEmpl));
console.log(getSalaryArrayReduce(arrayEmpl));


