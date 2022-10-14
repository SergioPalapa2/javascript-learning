//PARAMETRO REST
//al usar el parametro rest como parametro de una funcion, este alamcenara los parametros en un array
//este array sera accesible dentro de la funcion
//
//

/*
function conteo(...args){
	return "Numero de elementos: "+args.length;
}

console.log(conteo(1,2,3,4));
console.log(conteo("cadena",23,[2,5],{}));
*/

const conteo=(...args)=>{return "Elementos:"+args.length;}
console.log(conteo("Hola","mundo",666,{}));

//Ahora es posible utilizar 
//map()
//filter()
//reduce()

//ejemplos
var numbers=[1,2,3,4];
var doubles=numbers.map(function(x){
	return x*2;
});
console.log(doubles);


//PLAYGROUND


