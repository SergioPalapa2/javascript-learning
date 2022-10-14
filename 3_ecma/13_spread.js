//OPERADORES SPREAD
//expandir arreglos en sitios donde se esperan multiples parametros o elementos
//ej
var arr =[6,89,3,45];
var maximus=Math.max.apply(null,arr);

//nota: no se usa Math.max(arr) ya que este espera argumentos separados con ,
console.log(maximus);

const arr2=[6,8,9,7,100];
const maximus2=Math.max(...arr);//se aplica el operador SPREAD
console.log(maximus2)

//el operador spread solo funciona como argumento de nuna funcion o en una literal del tipo arreglo
//


