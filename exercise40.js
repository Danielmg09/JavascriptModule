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
const { resolve } = require('path');
class Empleado {
    constructor(id, nombre, edad, departamento) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.departamento = departamento;
    }
}

let erp = {
    leerFichero() {
        return new Promise((resolve, reject) => {
            fs.readFile("./ficheros/empleados2.txt", 'utf-8', function (err, res) {
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
            console.log('Id | Nombre | Edad | Departamento |');
            lineas.forEach(linea => {
                let empleado = linea.split(';');
                console.log(`${empleado[0]}| ${empleado[1]} | ${empleado[2]} | ${empleado[3]} |`)
            })
        })


    },
    insertarEmpleados(...empleados) {
        return new Promise((resolve, reject) => {
            let empls = "";
            this.leerFichero().then(res => {
                if (res != null && res != undefined && res != '') empls = '\n';
                empleados.forEach(e => empls += `${e.id};${e.nombre};${e.edad};${e.departamento}\n`);
                if (empls != '') empls = empls.slice(0, empls.length - 1);
                fs.appendFile("./ficheros/empleados2.txt", empls, function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });

            })


        })

    },
    TotalCobradoUsuario(userId){
        fs.readdir("./ficheros/", (err, files) => {
            if (err) {
                console.log(err)
                return
            }
            files = files.filter(file => file.startsWith('nominas'));

            let amount = 0;

            files.forEach(file => {

                fs.readFile("./ficheros/" + file, 'utf-8', (err, res) => {
                    res = res.replace('\r', '')
                    if (err) {
                        reject(err);
                    } else {
                        let nominas = res.split("\n");
                        let lineaDeNomina = nominas.filter(nom => (nom.split(";"))[0] == userId);

                        if (lineaDeNomina.length > 0) {
                            amount += Number(lineaDeNomina[0].split(";")[1]);
                        } 
                    }
                });

            })
            return amount;
        });



    }
    ,
    mostrarNominas(userId) {
        fs.readdir("./ficheros/", (err, files) => {
            if (err) {
                console.log(err)
                return
            }

            files = files.filter(file => file.startsWith('nominas'));
            let promisesList = [];

            files.forEach(file => {
                let promise = new Promise((resolve, reject) => {
                    fs.readFile("./ficheros/" + file, 'utf-8', function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            let year = file.substr(7, 4);
                            let month = file.substr(11, file.indexOf(".") - 11);
                            let nominas = res.split("\n");
                            let lineaDeNomina = nominas.filter(nom => nom.split(";")[0] == userId);
                            if (lineaDeNomina.length > 0) {
                                console.log('lineaDeNomina: ' + lineaDeNomina);
                                resolve({ year, month, amount: lineaDeNomina[0].split(";")[1] });
                            } else {
                                resolve();
                            }
                        }
                    });
                });
                promisesList.push(promise);
            });
            Promise.all(promisesList).then(resultsList => {
                resultsList.forEach(nomina => {
                    if (nomina) {
                        console.log(`${nomina.year} ${nomina.month} ${nomina.amount}`)
                    }
                })
            })
        });
    },
    totalCobrado(...userId) {

        let promisesList = [];


        userId.forEach(uId => {
            
            let promise2 = new Promise((resolve, reject) => {
                var id,nombre,departamento,amount=0;
                this.leerFichero().then((res) => {
                    res = res.replace('\r', '')
                    let lineas = res.split('\n');
                    lineas.forEach(linea => {
                        let empleado = linea.split(';');
                        if (empleado[0] == uId) {
                            id = empleado[0];
                            nombre = empleado[1];
                            departamento = empleado[3];
                            amount = this.TotalCobradoUsuario(uId);    
                        }
                    })
                    fs.readdir("./ficheros/", (err, files) => {
                        if (err) {
                            console.log(err)
                            return
                        }
                        files = files.filter(file => file.startsWith('nominas'));

                        files.forEach(file => {

                            fs.readFile("./ficheros/" + file, 'utf-8', (err, res) => {
                                res = res.replace('\r', '')
                                if (err) {
                                    reject(err);
                                } else {
                                    let nominas = res.split("\n");
                                    let lineaDeNomina = nominas.filter(nom => (nom.split(";"))[0] == uId);
                                    
    
                                    if (lineaDeNomina.length > 0) {
                                        amount += Number(lineaDeNomina[0].split(";")[1]);
                                    } 
                                }
                            });
    
                        })
                        resolve({id,nombre,departamento,amount});
                    });
                })

                

                

            });
            promisesList.push(promise2);
            
        });
        Promise.all(promisesList).then(resultsList => {
            resultsList.forEach(userdata => {
                if (userdata) {
                    console.log(`${userdata.id} | ${userdata.nombre} | ${userdata.departamento} | ${userdata.amount}`)
                }
            })
        })
    }
}

//erp.mostrarNominas(1);
erp.totalCobrado(1, 2);
