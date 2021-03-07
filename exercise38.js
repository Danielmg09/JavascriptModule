/** Vamos a tener un almacén de empleados.
 * Vamos a tener un método para almacenar empleados que admina n  parámetros de empleado
 * Vamos a tener un método para mostrar empleados, pero en función de si el que lo solicita es empleado o administrador,
 * no va a devolver los empleados inactivos.
 * 
 * Dar de alta n empleados, alojarlos en el almacén de empleados y mostrarlos como si fuésemos un usuario normal.
 * 
 * empleados van a tener id, nombre, activo o no.
 * 
 * almacenar empleados es un metodo asíncrono, no bloqueante que dura un tiempo aleatorio entre 3 y 5 segundos
 * 
 * mostrar empleados, simula un tiempo de acceso a la base de datos de entre 1 y 2 segundos.
 * almacén {
 *      array empleados
 *      almacenar()
 *      mostrarEmpleados(rol)
 * }
*/
class Empleado{
    constructor(nombre,activo){
        this.nombre = nombre;
        this.activo = activo;
        if(typeof Empleado.counter !== "undefined"){
            this.id = ++Empleado.counter;
        }else{
            obj.counter = this.id = 0;
        }
    }

}

let almacen = {
    listaEmpleados : [],
    almacenarEmpleados(...empleados){
        return new Promise(resolve =>{
            setTimeout(() => {
                empleados.forEach(x => this.listaEmpleados.push(x));
                resolve();
            },3000) 
        })
    },
    mostrarEmpleados(solicitante){
        return new Promise(resolve => {
            
        })

    },




}