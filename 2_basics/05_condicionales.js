//CONDICIONAL IF

//operadores
// == equivalencia
// === estricta equivalencia
// ¡= diferencia
// ¡== estricta diferencia
// > mayor que
// >= mayor o igual
// < menor que
// <= menor o igual
// && and
// || or

function promedio(a,b,c,d){
    return (a+b+c+d)/4
}

var prom=promedio(10,6,5,7);//llamado de funcion 

if(prom<6){
    console.log("Reprobado")
}else{console.log("Aprobado")}




	
var x,y;
x=1;
y='1';

if(x===y){//operador de estricta equivalencia
    console.log("Son iguales")
}else(console.log("No son estrictamente iguales"))

console.log(typeof(x)); 
console.log(typeof(y)); 
//la sentencia else-if agrega mas niveles de comparacion anclados al primer if, se ejecutan de forma ascendente


//DECLARACION SWITCH
var estado='regular';

switch(estado){
    case "regular":
        console.log("Inscripcion activa");
    break;

    case "irregular":
        console.log("Inscripcion no disponible")
        break;

    default:
        console.log("Opcion invalida")
    break;
}



//prueba if con operador  === 

function isEqual(a,b){
    return a===b;//devueve false o true si son estrictamente iguales
}
console.log(isEqual('29',29));


var v1=2;
var v2=2;
if(v1===v2){
    //return true
    console.log(true)
}else{console.log(false)}

// usar el operador === es mejor que un if para valores logicos(true-false)


//OPERADOR TERNARIO
//Escribe una fncion if-else en una sola linea
//Es posible encadenar varios else (else-if) con multiples :

let j=3;
let k='3';
console.log(j===k?"Equal":"Not equal");


