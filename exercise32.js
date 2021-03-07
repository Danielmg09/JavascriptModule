

let color = "azul";

let createPromise = function () {
    return new Promise((resolve, reject) => {
        if (color === "rojo") {
            resolve("Es rojo!");
        } else {
            reject("No es rojo!")
        }
    })
}

createPromise()
.then(msg => console.log("Resolve: "+msg))
.catch(err => console.log("Catch: "+err));

console.log("Mi mensaje");