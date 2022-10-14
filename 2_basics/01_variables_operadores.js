
console.log("HOLA JAVASCRIPT"); //salida por consola

//	tipos de variables:
//*undefined
//*null
//*boolean
//*string
//*symbol
//*bigint
//*number
//*object


var var1; 
var vacio=null; //null debe de ir en minusculas
var estado=true;
var nombre="Sergio";
var simbolo=Symbol('key'); //un symbol es un identificador unico e inmutables 
var entero=54654654654654654654654n;
var numero=28;
var objeto={
	prop1:'Hola',
	prop2:'mundo'
}	

console.log("La variable 'variable' es del tipo: "+typeof variable);
console.log("La variable 'vacio' es del tipo: "+typeof vacio);
console.log("La variable 'estado' es del tipo: "+typeof estado);
console.log("La variable 'simbolo' es del tipo: "+typeof simbolo);
console.log("La variable 'entero' es del tipo: "+typeof entero);
console.log("La variable 'numero' es del tipo: "+typeof numero);
console.log("La variable 'objeto' es del tipo: "+typeof objeto);

//operadores
//+ suma
//- resta
//* multiplicacion
// / division
// ++ suma 1 a la variable
// -- resta 1 a la variable
// % residuo de una division
// += suma al contenido de una variable
// -= resta al contenido de una variable
// *= multiplica al contenido de una variable
// /= divide al contenido de una variable



let a;
let b;
let c;
let x;
let y;
let z;

a=36;
b=56;

console.log("a+b= "+ (a+b));
console.log("a-b= "+ (a-b));
console.log("axb= "+ a*b);
console.log("a/b= "+ a/b);

c=25;
c++;
b--;
console.log("nuevo valor de c: "+c);
console.log("nuevo valor de b: "+b);
console.log("el residuo de a/c:  "+ (a%c));

x=10;
y=5;
z=100;

x+=10;
console.log("Nuevo valor de x: "+x);


