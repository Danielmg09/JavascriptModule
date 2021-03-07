/*Un método insertar empleados que tiene que insertar empleados en el fichero:

Un método leer nóminas:

cada fichero va a tener las nóminas de un mes, y va a tener el formato (id;nomina)
los ficheros de nóminas tienen el siguiente nombre: nominas2021enero.txt
se pide, un método que sea mostrarNominas(id empleado) -> ... mostrar todas las nóminas con su fecha

enero 2021 150$

se pide, un método para mostrar el total percibido por el trabajdor en la empresa

totalCobrado(id empleado 1, id empleado 2...)

id empleado | nombre empleado | sector empleado | total cobrado

*/

let fs = require('fs');



let accesoNominas ={
    leerNominas(){
        return new Promise((resolve,reject) =>{
            fs.readFile("./ficheros/empleados.txt", 'utf-8', function(err, res){
                if(err){
                    reject(err);
                }else{
                    resolve(res);
                }
            });
        })


    },
    mostrarNominas(){

    },
    totalCobrado(idEmpleado){

    },



}