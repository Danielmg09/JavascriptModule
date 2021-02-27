//FUNCION CON CALLBACK
//Pasar funciones por parametros

//1. funcion que analiza si la longitud de una cadena es un numero 
//primo o no
//2. Requiere dos parametros adcionales, seran funciones que 
//se invocan en funcion de si es primo o no

var stringToAnalize = "E";
var stringToAnalize2 = "cuatro";
function check(myString,si,no){
    if(isPrime(myString.length)){
        si();
    }else{
        no();
    }
}

function si(){
    console.log("es primo")
}
function no(){
    console.log("no es primo")
}
function isPrime(number){
    var sum =0;
    for(var i = number;i>0;i--){
        if(i%2 == 0 )sum++;
    }
    if(sum>2)return false;
    return true;
  }

  //Opcion 1
check(stringToAnalize,si,no);
 //Opcion con funcion anonima
check(stringToAnalize2,function(){
    console.log("es primo");
},function(){
    console.log("no es primo");
});