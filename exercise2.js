
//CONCURSO DE ALUMNOS

//1.nombre, edad y lugar de nacimiento

//2. nombre > 6 letras -> OK

//3. mayor de edad -> OK

//4. lugar nacimiento < 8 -> OK

//5. si ok, gana. sino, por que no.

var nombre = "Ana";
var edad = 23;
var lugarNacimiento = "Cuenca";


if(nombre.length>6 && edad>18 && lugarNacimiento.length<8){
    console.log("El alumno ha ganado el concurso")
}else{
    console.log("El alumno ha perdido")
    if(nombre.length<6){
        console.log("El nombre tiene menos de seis letras");
    }
    if(edad<18){
        console.log("Es menor de edad");
    }
    if(lugarNacimiento.length>8){
        console.log("El lugar de nacimiento tiene mas de 8 letras");
    }
}
