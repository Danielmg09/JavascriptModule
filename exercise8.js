let obj1={
    miArray : ['uno','dos','tres'],
    sacarPrimero : function(){
        let arr1 = this.miArray.shift();
        console.log(arr1);

    },
    sacarUltimo : function(){
        let arr2 = this.miArray.pop();
        console.log(arr2);

    },
    meterPrimero : function(content){
        let arr3 = this.miArray.push(content);
        console.log(this.miArray);

    },
    meterUltimo : function(content){
        let arr4 = this.miArray.unshift(content);
        console.log(arr4);
        console.log(this.miArray);

    },

}

obj1.sacarPrimero();
obj1.sacarUltimo();
obj1.meterPrimero('cuatro');
obj1.meterUltimo(['cinco','seis','siete']);
