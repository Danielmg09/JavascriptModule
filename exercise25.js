/* Lista de objetos que tengan nombre, apellido, método whoIsYourBoss que devuelve por
pantalla el jefe del empleado y salario.

Se pide implementar una lista de objetos como el descrito, que cuando se invoque a su
método whoIsYourBoss muestre el nombre de uno de los empleados (el jefe es empleado 
    también).
    
    Un método externo que muestre los nombres y apellidos de todos y cada uno así como si 
    están por encima de la media en salario o por debajo,*/



let whoIsYourBoss = function(){
    console.log(`Boss: ${this.nombre} Salario: ${this.salario}`)
}


let emp1 ={
    nombre:'Pepe',
    apellido: 'Olivo',
    salario: 2100,
    whoIsYourBoss
    
}

whoIsYourBoss = whoIsYourBoss.bind(emp1);

let emp2 ={
    nombre:'Sara',
    apellido: 'Rosales',
    salario: 1500,
    whoIsYourBoss
    
}
let emp3={
    nombre:'Maria',
    apellido: 'Manzano',
    salario: 3000,
    whoIsYourBoss
}

emp










emp2.whoIsYourBoss();

emp3.whoIsYourBoss();








