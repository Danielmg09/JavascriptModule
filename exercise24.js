/* Crear una función que accede a un atributo del contexto y lo muestra por pantalla.
Creamos un objeto para esa función.
Asignamos el contexto de ejecución de esa función a ese objeto.
creamos otro objeto y a un atributo de ese objeto, asignamos esa función.
Ejecutamos la función desde el último objeto. */

let obj1 = {
    food : 'pasta',
    myFavouriteFood(){
        console.log(`My favourite food is ${this.food}`)
    }
}
let obj2 ={
    food : "sushi"
}

let func2 = obj1.myFavouriteFood.bind(obj2);
func2();