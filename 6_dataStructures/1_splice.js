//La funcion splice() permite eliminar cualquier numero de elementos consecutivos en cualquier punto de un arreglo.
//splice() toma 3 parametros
//Los primeros dos argumentos son enteros que representan indices o posiciones en el array
//1er argumento: Indice desde donde se empieza a eliminar elementos
//2do argumento: Numero de elementos a eliminar
//
//splice modifica y regresa un nuevo arreglo con los elementos modificados
//

let array=["Hola","mundo",46,23,56];
let narray=array.splice(2,3);
console.log(array);
console.log(narray);


//3er argumento: Se compone de elementos que han de ser agregados al arreglo
//
const fix=(arr)=>{
	arr.splice(0,3,"arial","courier","times");
	return arr;
}

arr2=["chiller",null,"papyrus","sonsolas","ms","digital"];
console.log(arr2);
console.log(fix(arr2));


