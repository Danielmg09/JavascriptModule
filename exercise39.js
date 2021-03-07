let fs = require('fs');
const { resolve } = require('path');


/* implementar un objeto que tenga un método leer fichero y que devuelva una promesa con el contanido del fichero */

/*Un método mostrar empleados que tiene que mostrar los empleados con la siguiente plantilla:

=== EMPLEADOS ===

| Nombre | Edad | Departamento |

| Nombre | Edad | Departamento |

| Nombre | Edad | Departamento |

...

/*Un método insertar empleados que tiene que insertar empleados en el fichero:

*/
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

let accesoFichero = {
    leerFichero() {
        return new Promise((resolve, reject) => {
            fs.readFile("./ficheros/empleados.txt", 'utf-8', function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        })

    },
    mostrarEmpleados() {
        this.leerFichero().then(function (res) {
            res = res.replace('\r', '')
            let lineas = res.split('\n');
            console.log('| Nombre | Edad | Departamento |');
            lineas.forEach(linea => {
                let empleado = linea.split(';');
                console.log(`| ${empleado[0]} | ${empleado[1]} | ${empleado[2]} |`)
            })
        })


    },
    insertarEmpleados(...empleados) {
        return new Promise((resolve, reject) => {
            let empls = "";
            this.leerFichero().then(res => {
                if(res!=null && res!=undefined && res!='') empls='\n';
                empleados.forEach(e => empls += `${e.nombre};${e.edad};${e.departamento}\n`);
                if (empls != '') empls = empls.slice(0, empls.length - 1);
                fs.appendFile("./ficheros/empleados.txt", empls, function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });

            })


        })

    },
    mostrarNominas(){
        return new Promise((resolve,reject)=>{
            

        })

    }

}

class Empleado {
    constructor(nombre, edad, departamento) {
        this.nombre = nombre;
        this.edad = edad;
        this.departamento = departamento;
    }
}
let empleado1 = new Empleado('Juan', 25, 'Logistica');
let empleado2 = new Empleado('Jorge', 32, 'Logistica');


//accesoFichero.leerFichero().then((res) => console.log(res));
//accesoFichero.mostrarEmpleados();
accesoFichero.insertarEmpleados(empleado1, empleado2)
    .then(() => accesoFichero.mostrarEmpleados())
    .catch(err => console.log(err));
