
    
/* función que devuelva una promesa que va a evaluar una cifra, si esa cifra es mayor que 50, se resolverá correctamente
y mostrará un mensaje de éxito, y si la cifra es menor, se resolverá erróneamente y devolverá un mensaje de error*/

function checkNumber(cifra){
    return new Promise((resolve, reject) => {
        if (cifra > 50) {
            resolve(cifra + " es mayor de 50");
        } else {
            reject(cifra + " es menor de 50")
        }
    })
}

checkNumber(5)
    .then(msg => console.log("Resolve: "+msg))
    .catch(err => console.log("Catch: "+err));
checkNumber(56)
    .then(msg => console.log("Resolve: "+msg))
    .catch(err => console.log("Catch: "+err));


