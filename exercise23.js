/* implementar una función que reciba n parámetros de tipo cadena.
Estos parámetros van a ser el nombre y el primer apelido y luego, dejamos que
vengan como parámetros todos los apellidos que el usuario quiera. Dentro de la
función voy a tener 3 variables, el nombre, el primer apellido y el resto de apellidos.

Invocar a esta función con varios ejemplos.

Imprimir un texto que ponga:
Nombre: ...
Aprellido: ...
Resto de apellidos: ...*/

let string1 = "Marta Sanchez Diaz Perales"

function nomAp(stringNombres){

    let[nombre,apellido,...restoApellidos] = stringNombres.split(' ');
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido: ${apellido}`);
    console.log(`Resto de Apellidos: ${restoApellidos}`);

}
nomAp(string1);