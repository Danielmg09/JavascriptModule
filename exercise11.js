// declarar un array que tenga numeros y vamos a declarar una funcion para recibir y devolver un array con los numeros mayores que 0 multiplicados por 2 y los menores de 0 multiplicadfos por 3

var numArray = [1, -2, 3, 4, -5, 6];
function manipularArray(originalArray) {

    return originalArray.map((item, index, array) => item > 0 ? item * 2 : item * 3)
}

function compaareNumericAsc(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

function compaareNumericDesc(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}

console.log(manipularArray(numArray));

/*Declarar función para ordenar cadenas que tenga en cuenta el número de caracteres de una cadena*/

let arrayString1 = ['tijeras', 'vaso', 'raton'];

function compareStringNumero(a, b) {
    if (a.length > b.length) return -1;
    if (a.length == b.length) return 0;
    if (a.length < b.length) return 1;
}

console.log(arrayString1.sort(compareStringNumero));

/*Declarar función para ordenar cadenas que tenga en cuenta el número de apariciones de un caracter dado*/

let arrayString2 = ['tijeraas', 'vaso', 'raaaton'];
let c = 'a';


function compareRepeated(array, letra) {
    function wrapper() {
        function cr(word, letter) {
            let count = 0;
            for (let i = 0; word.length > i; i++) {
                if (word[i] === letter) {
                    count++;
                }
            }
            return count;
        }
    }


    function compareCount(a, b) {
        if (cr(a, letra) > cr(b, letra)) return -1;
        if (cr(a, letra) == cr(b, letra)) return 0;
        if (cr(a, letra) < cr(b, letra)) return 1;
    }
    return array.sort(compareCount);

}

console.log(arrayString1.sort(compareStringNumero));
console.log(compareRepeated(arrayString2, c));



