//tomar por coinsola una clave y un valor
//crear un objeto con esa clave y ese valor
//mostar por pantalla el valor de esa calve del objeto

//obj{nombre:"pepe"} --> "el nombre es pepe"

var myArgs = process.argv.slice(2);
console.log(myArgs)

let clave = myArgs[0]
let valor = myArgs[1]

var obj = {
    [clave] : valor,
    show(){
        console.log(`clave : ${this[clave]}`)
    }
};
obj.show();


    
