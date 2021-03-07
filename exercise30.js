
/*

vamos a definir una función que va a aceptar como parámetro 2 variables: número de iteraciones y etiqueta. Esta 
función va a mostrar por pantalla cada número de iteración hasta llegar a la cifra del parámetro y va a llevar un
sufijo con la etiqueta proporcionada

Vamos a ejecutar esta función 2 veces de manera síncrona.

rojo, 7 ->

rojo:1 
rojo:2
...
rojo:7

--------------

crear una función que va a ser utilizada para realizar ejecuciones asíncronas.
Le vamos a pasar algunas funciones para que las ejecute asíncronamente*/

function showIterations(iteration, label){
    for(let i = 1;i<=iteration;i++){
        console.log(`${label} : ${i}`);
    }
}

function asincrona(callback,iterations,label){
    setTimeout(function(){
        let i =0;
        while(i<iterations){
            i++;
        }
        callback(i,label);  
})
}
function asincrona2(callback,...rest){
    setTimeout(function(){
       callback(rest)
        }
        ,0)
}
function ejecucionAsincrona(func, ...rest) {
    
    setTimeout(function () {
     func(...rest)
    }, 0)
}
function showIterationsAsin(iteration, label){
    for(let i = 1;i<=iteration;i++){
        console.log(`${label} : ${i}`);
        if(label === 'verde' && i ===3){
            for(let j = 0; j<= 100000000000; j++){

            }
        }
    }
}




showIterations(5,'verde');
showIterations(4,'rosa');
console.log('fin');

//asincrona(showIterations,7,'marron');
//asincrona(showIterations,8,'verde');
//console.log('fin');

//asincrona2(showIterations,7,'marron');
//asincrona2(showIterations,8,'verde');
//console.log('fin');

ejecucionAsincrona(showIterationsAsin,8,'verde');
ejecucionAsincrona(showIterationsAsin,5,'rosa');
console.log('fin');


