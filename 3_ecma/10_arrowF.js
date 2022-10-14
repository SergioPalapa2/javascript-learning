//ARROW FUNCTIONS
//

/*
//uso comun de una funcion

const funcion=function(){
	const myVar="esta es una funcion comun";
	return myVar;
}
console.log(funcion());
*/

//uso de funciones flecha (arrow functions)
const funcion1= ()=>{
	const myVar="esta es una funcion flecha";
	return myVar;
}

//si no hay una funcion en el cuerpo y solo se retorna un valor es posible omitir "return"
const funcion2= ()=>"esta es una funcion flecha simplificada";

console.log(funcion1());
console.log(funcion2());

//Las funciones flecha son utiles cuando solo se va a usar la funcion en ese segmento de codigo y no se va a reutilizar
/////////////////////////////////////////////////
//ARROW FUNCTIONS CON PARAMETROS
//ejemplos
/*
const duplica =(num)=>num*2;
console.log(duplica(8));
*/


//en caso de presentar solo un parámetro es posible omitir los parentesis
//
const duplica=num=>num*2;
console.log(duplica(6));

//o mas de un argumento:
const multiply=(x,y)=>x*y;
console.log(multiply(2,3));


//ejemplo!!!
//
const concatenar=(arr1,arr2)=>{
	return arr1.concat(arr2,[7,8]);//concat() regresa dos o mas cadenas unidas, concatenadas
}

console.log(concatenar([1,2,3],[4,5,6]));
