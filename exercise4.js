//definir como constante una plantilla de mail

/*
Hola $$nombre$$.
Te envio este mail para que tengas mi dieccion
Atentamente $$remitente$$.
*/

//definir funcion que simule enviar con esa plantilla
// mostrar poer pantalla mail con datos actualizados 

//despues de enviar el mail, se va a guardar un registro de que hemos enviado el mail (mostrar por pantalla)
//registro: fecha - hora destinatario :: remtente


var nombre1 = "Pedro";
var remitente1 = "Sara";

function sendMail(plantilla,nombre,remitente){
    const plantilla = 'Hola ${nombre}.\nTe envio este mail para que tengas mi direccion.\nAtentamente ${remitente}'
    console.log(plantilla);
}

sendMail(plantilla,nombre1,remitente1);