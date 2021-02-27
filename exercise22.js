var listaNombres = ["Pepe", "Mario", "Sonia", "Iris", "Juan", "Pedro", "Alberto", "Marta"];
 
let generador = {
    rango: 8,
    [Symbol.iterator]: function () {
 
        return {
            current: 0,
            usedIndex: [],
            rango: this.rango,
            next() {
                this.current++;
                if(this.rango > listaNombres.length){
                    return {
                        done: true,
                        error: console.log("El rango es superior al tamaño del array")
                    }
                }
                else if (this.current <= this.rango) {                    
                    let randomIndex = 0;
                    while(this.usedIndex.includes(randomIndex)){
                        randomIndex = Math.floor(Math.random() * (listaNombres.length - 1));
                    }
                    this.usedIndex.push(randomIndex);                           
 
                    return {
                        done: false,
                        value: listaNombres[randomIndex]
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