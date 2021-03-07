/**
 * Un objeto almacén que tendrá una lista de objetos almacenados.
 * Estos objetos almacenados tendrán nombre, id único y descripción.
 * el almacén va a tener un método asíncrono (para que no bloquee) y será ordenar por nombre el almacén.
 * El almacén va a tener dos métodos más, mostrar elementos por pantalla y mostrar por pantalla tamaño del almacén
 * 
 * 
 * Ejecutar un código que implemente ese almacén con algunos elementos de ejemplo y msotrar por pantalla el número
 * de elementos y los elementos ordenados por nombre.
*/

let ob1 ={
    id:1,
    nombre:'Daniel',
    descripción: 'estudiante'
} 
let ob2 ={
    id:2,
    nombre:'Saul',
    descripción: 'otro estudiante'
} 
let ob3 ={
    id:3,
    nombre:'Marcos',
    descripción: 'profesor'
} 

let almacen = {
    lista:[ob1,ob2,ob3],
    orderByName(){
        return new Promise(resolve =>{
            this.lista.sort((a,b) => {
                if (a.nombre > b.nombre) return 1;
                if (a.nombre == b.nombre) return 0;
                if (a.nombre < b.nombre) return -1;
            });
            resolve(this.lista);
        }
        )
    },
    showElements(){
        this.lista.forEach(item => console.log(`Id: ${item.id} Nombre: ${item.nombre}`));

    },
    showSize(){
        console.log(this.lista.length);
    }


}

almacen.orderByName().then(() => almacen.showElements());
almacen.showSize();




