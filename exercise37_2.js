/* ahora, el método ordenar almacén, va a tener una duración aleatoria entre 2 y 5 segundos
 * 
 * Añadir un método que sea llenar almacén que  adminitrá n objetos a introducir. Si los objetos a introducir
 * no son de tipo Obj, mostrará un error.
 * 
 * Si durante la ordenación, hay algún elemento que no tenga nombre, devolverá la promesa con un 
 * error y un mensaje de error*/

class obj {
    constructor(nombre,descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
        if(typeof obj.counter !== "undefined"){
            this.id = ++obj.counter;
        }else{
            obj.counter = this.id = 0;
        }
    }

}
let ob1 = new obj('Daniel','Estudiante');
let ob2 = new obj('Saul','Otro Estudiante');
let ob3 = new obj('Marcos','Profesor');


let almacen = {
    lista:[ob1,ob2,ob3],
    orderByName(){
        return new Promise(resolve =>{
            
            setTimeout(() => {
                this.lista.sort((a,b) => {
                    if (a.nombre > b.nombre) return 1;
                    if (a.nombre == b.nombre) return 0;
                    if (a.nombre < b.nombre) return -1;
                });
                resolve(this.lista);

            },3000)
        });
    },
    showElements(){
        this.lista.forEach(item => console.log(`Id: ${item.id} Nombre: ${item.nombre}`));

    },
    showSize(){
        console.log(this.lista.length);
    }
    /*llenarAlmacen(...objs){
        objs.foreach(x => { if(typeof x === 'obj'){
            this.lista.push(x);
        }else{
            console.log('err';)
        }
        })


    }*/


}

almacen.orderByName().then(() => almacen.showElements());
almacen.showSize();




