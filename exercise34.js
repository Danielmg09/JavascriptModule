let createPromise = function (color) {
    return new Promise((resolve, reject) => {

        let segundos = 0;
        if (color === "amarillo") {
            segundos = 3000;
        }
        setTimeout(function () {
            if (color === "rojo") {
                resolve("Es rojo!");
            } else {
                reject("No es rojo! es " + color)
            }
        }, segundos)

    })
}

createPromise("amarillo")
    .then(msg => console.log("Resolve: " + msg))
    .catch(err => console.log("Catch: " + err));

createPromise("rojo")
    .then(msg => console.log("Resolve: " + msg))
    .catch(err => console.log("Catch: " + err));

createPromise("azul")
    .then(msg => console.log("Resolve: " + msg))
    .catch(err => console.log("Catch: " + err));

console.log("Mi mensaje");