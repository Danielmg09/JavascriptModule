var objeto = {
    lista: ["Manzana","Pera","Naranja","Cereza","Granada"],
    buscarIndexof: function(cadena){
        if(this.lista.indexOf(cadena) !== (-1))
            console.log(`${cadena} se encuentra en la lista`);
        else
            console.log(`${cadena} no se encuentra en la lista`);
    },
    buscarIncludes: function(cadena){
        if(this.lista.includes(cadena))
            console.log(`${cadena} se encuentra en la lista`);
        else
            console.log(`${cadena} no se encuentra en la lista`);
    },
    buscarFind: function(cadena){
        let encontrado = this.lista.find(function(item,index,array){
            return cadena === item;
        });
        if(encontrado)
            console.log(`${cadena} se encuentra en la lista`);
        else
            console.log(`${cadena} no se encuentra en la lista`);
            
    }
}
 
console.log("Index Of:");
objeto.buscarIndexof("Cereza");
objeto.buscarIndexof("asdf");
 
console.log("Includes:");
objeto.buscarIncludes("Manzana");
objeto.buscarIncludes("asdf");
 
console.log("Find:");
objeto.buscarFind("Granada");
objeto.buscarFind("asdf");
