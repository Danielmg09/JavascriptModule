/*vamos a crear 3 tipos de clases, una clase persona, una clase perro y una clase gato 

Cada una va a tener atributos y métodos diferentes

Vamos a tener un objeto que va a hacer de almacén y va a almacenar por separado cada tipo de objeto.

Además, el almacén podrá buscar por cada tipo de objeto y atributo que consideremos 

almacén.buscarPersona(nombre) ... puede devolver 1 persona... puede devolver n personas

El almacén podrá recibir funciones personalizadas para mostrar los objetos pertinentes según esa función 
personalizada.

almacén.ejecutarFiltroPersonalizado(funcionFiltro) devolver perros mayores de 25 años.
*/
let almacen = {
    personas : [],
    perros : [],
    gatos : [],
    buscarPersona(nombre,edad){
        return this.personas.find(x => x.nombre == nombre && x.edad == edad);
    },
    buscarPerro(nombre){
        
    },
    buscarGato(nombre){
        
    },
    ejecutarFiltroPersonalizado: function(fun,...parametros){
        return fun.call(this,...parametros);
    }

    

}

function filtrarEdad(edad){
    return this.personas.find(x => x.edad >= edad)
}
function filtrarPorNombreyEdad(nombre,edad){
    return this.personas.find(x => x.edad < edad)
}

class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    sayHi(){
        console.log(`Me llamo ${this.nombre} y tengo ${this.ciudad} años`)
    }


}
class Perro {
    constructor(nombre,raza){
        this.nombre = nombre;
        this.raza = raza;
    }
    sayHi(){
        console.log(`Me llamo ${this.nombre} y soy un ${this.raza}`)
    }

}
class Gato {
    constructor(nombre,raza){
        this.nombre = nombre;
        this.raza = raza;
    }
    sayHi(){
        console.log(`Me llamo ${this.nombre} y soy un ${this.raza}`)
    }
}


almacen.personas.push(new Persona('Pepe',25));
almacen.personas.push(new Persona('Maria',37));
console.log(almacen.buscarPersona('Pepe',25));
console.log(almacen.ejecutarFiltroPersonalizado(filtrarEdad,25));
console.log(almacen.ejecutarFiltroPersonalizado(filtrarEdad,24));
console.log(almacen.ejecutarFiltroPersonalizado(filtrarEdad,38))

//funcion filtro con edad y nombre (contiene la a y tiene mas de 25)