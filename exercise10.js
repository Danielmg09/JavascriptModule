/*
1. Declarar un objeto que tenga 2 atributos y una función que utilice ambos atributos. P.e. para mostrarlos
por pantalla.

2. Duplicar ese objeto, de manera que cuando se modifiquen los atributos del primero, 
no se modifiquen los del segundo.

3. Comprobar si la función se modifica o no.

4. uno de los atributos va a ser un objeto
4.1 comprobar si ese objeto, después de ser copiado el objeto padre se cambia cuando modificamos el objeto original.
4.2 si se cambia, modificar nuestra función de duplicar() para que no ocurra, para que los objetos hijos se copien
como valor y no como referencia, es decir, que se clonen.
*/

obj2 = duplicar(obj1)

console.log(obj2)
obj1.direccion.calle = "Plaza"
console.log(obj2)

let obj1 = {
    name: "pepe",
    age: 7,
    showInfo(){
        console.log(` ${this.name} is ${this.age} years old`)
    },
    direccion: {
        calle: "Calle única",
        numero: 18
    }
}