//Sentencias para importar o exportar codigo desde archivos js

/*
export cont add=(x,y)=>{
	return x+y;
}
*/

//o se logra el mismo efecto mediante:
const add =(x,y)=>{
	return x+y;
}
export{add};//puede haber mas de una funcion separadas por ,

//esta funcion puede ser importada en otro archivo js

//////////////////////
//'import' permite escoger que parte del archivo o modulo se van a cargar
//ej
//import {add} from './math_functions.js';
//import {add, sustract} from ....

//para importar TODO el contenido se usa *
//import * as myMathModule from "./math_functions.js";
//esto creara un objeto al cual se podra acceder para usar las funciones importadas
//ejemplos:
/*
 *
 * myMathModule.add(2,3);
 * myMathModule.substract(5,3);
 *
 */

//es posible tambien exportar solo un valor (fallback value)
/*
 * export default function add(x,y){
 * 	return x+y;
 * }
 *
 * export default function(x,y){
 *	return x+y;
 * }
 * */


//para importar un valor fallback solo se añade a una variable en vez de usar {}
/*
 * import add from 'math_functions.js';
 * */



