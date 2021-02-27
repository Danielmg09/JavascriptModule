/* Iterador personalizado que devuelva números aleatorios, tantos como le indiquemos en su atributo rango */
let generador = {
    rango: 10,
    [Symbol.iterator]: function () {

        return {
            current: 0,
            rango: this.rango,
            next() {
                this.current++;
                if (this.current <= this.rango) {
                    return {
                        done: false,
                        value: Math.random()
                    }
                }else{
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

for (let num of generador) {
    console.log(num);
}