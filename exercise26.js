/* implementar un objeto que actue como calculadora de una operación, con cache
El objeto va a tener un metodo calcular() al cual hay que pasarle un atributo que sera el que utilicemos para la operacion (suma, resta..)
Antes de realizar la operacion, tendra que mirar si ya tien la reaspurata.*/


let Calculadora ={
    cache : new Map(),
    calcula(parametro){
        if(this.cache.has(parametro)){
            //console.log('cache:');
            return this.cache.get(parametro);
        }else{
            let resultado = parametro + parametro;
            this.cache.set(parametro,resultado);
            return resultado;
        }
    }
}

//console.log(Calculadora.calcula(5));
//console.log(Calculadora.calcula(5));

/*implementar una función que decore la función de cálculo que le quiero pasar*/
/*el decorador va a mostrar un mensaje por consola que antes de ejecutar la función de cálculo,
informará al usuario si el parámetro está cacheado o no. Si no está cacheado, tendá que mostrar un mensaje
advirtiendo de que va a costar bastante tiempo el cálculo. Si está cacheado, no mostrará nada. */

function calculateDecorator(func){
    return function(param){
        if(!this.cache.get(param)) console.log("El calcuclo va a tardar algod e tiempo. Espera por favor");
        return func.call(this, param);
    }
}
   
//finalizar con capturas

Calculadora.calcula = calculateDecorator(Calculadora.calcula);

console.log(Calculadora.calcula(10));
console.log(Calculadora.calcula(15));
console.log(Calculadora.calcula(20));
console.log(Calculadora.calcula(15));