// objeto 2 atributros y funcion que los utilice
// duplicar ese objeto

function duplicar(object){
    let object2 = Object.assign({},object);
    return object2;
}

let obj1 = {
    name:'Carlos',
    city:'Zaragoza',
    sayhi: function(){
        console.log(`I am ${this.name} from ${this.city}`)
    }
}

function sayHello(){
    console.log(`I am ${this.name} from ${this.city}`)
}

obj1.sayhi();

let obj2 = duplicar(obj1);

obj2.name = "Pepe";
obj2.sayhi();


