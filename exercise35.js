
letcreatePromiseWithoutBlocking = function (color) {​​​​​
returnnewPromise((resolve, reject) => {​​​​​
letsegundos = 0;
if (color === "amarillo2") {​​​​​
segundos = 3000;
        }​​​​​
setTimeout(function () {​​​​​
if (color === "rojo") {​​​​​
resolve("Es rojo!");
            }​​​​​ else {​​​​​
reject("No es rojo! es " + color)
            }​​​​​
        }​​​​​, segundos)
    }​​​​​)
}​​​​​
letcreatePromiseWithBlocking = function (color) {​​​​​
returnnewPromise((resolve, reject) => {​​​​​
if (color === "amarillo") {​​​​​
for (leti = 0; i < 1000000000; i++) {​​​​​ }​​​​​
        }​​​​​
if (color === "rojo") {​​​​​
resolve("Es rojo!");
        }​​​​​ else {​​​​​
reject("No es rojo! es " + color)
        }​​​​​
    }​​​​​)
}​​​​​

    
createPromiseWithoutBlocking("amarillo2")
    .then(msg=>console.log("Resolve: " + msg))
    .catch(err=>console.log("Catch: " + err));
createPromiseWithBlocking("amarillo")
    .then(msg=>console.log("Resolve: " + msg))
    .catch(err=>console.log("Catch: " + err));
createPromiseWithoutBlocking("rojo")
    .then(msg=>console.log("Resolve: " + msg))
    .catch(err=>console.log("Catch: " + err));
createPromiseWithoutBlocking("azul")
    .then(msg=>console.log("Resolve: " + msg))
    .catch(err=>console.log("Catch: " + err));
console.log("Mi mensaje");
