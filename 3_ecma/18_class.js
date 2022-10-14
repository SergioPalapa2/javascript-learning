//ES6 provee una nueva sintaxis para crear objetos mediante 'class'
//en JS definimos funciones contructoras  y usamos 'new' para inicializarlas.
//
/*
var cohete=function(planeta){
	this.planeta=planeta;
}
var zeus=new cohete('Jupiter');

console.log(zeus);
console.log(cohete); //valor del metodo cohete
*/

//con la sintaxis de 'class' solo se reemplaza la funcion por 'constructor'
class cohete{
	constructor(planeta){
		this.planeta=planeta;
	}
}
const triton= new cohete('marte')
console.log(cohete);
console.log(triton);
console.log(triton.planeta);




