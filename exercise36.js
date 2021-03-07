function sum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === "number" && typeof b === "number") {
            resolve(a + b)
        } else {
            reject("Los datos pasados no son numéricos: " + a + ", " + b);
        }
    });
}

let sumPromise = sum(2, 5);

sumPromise.then(res => {
    console.log(res);
    return "Continuo con mi promesa";
})
    .then(res => console.log(res))
    .catch(err => console.log("Ha habido un error: " + err));