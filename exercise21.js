//número de nombres a mostrar. Tiene que mostrarlos de manera aleatoria pero sin que se repita ningún nombre. De manera que si yo le pongo que el número de nombres a mostrar es el número total de nombres en el array, tendrá que mostrar todos.  Siel nñumero de nomrbes que quiero mostrar es superior al array, tendrá que dar un error e informar de que no es posible.

let generator = {
    nombres: ["Addy", "Saul", "Marcos", "Iker", "Daniel", "Paula"],
    range: 10,
    [Symbol.iterator]: function() {
        return {
            current: 0,
            nombres: this.nombres,
            len: this.nombres.length,
            range: this.range,
            next() {
                this.current++;
                if(this.current <= this.range) {
                    return {
                        done: false,
                        value: this.nombres[Number.parseInt(Math.random() * this.len)]
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}
 
for(let i of generator) {
    console.log(i);
}

