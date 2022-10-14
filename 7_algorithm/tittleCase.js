//convertir la primera letra de las palabras de una cadena en letras mayusculas
//

const tittleCase=(str)=>{
	let arrStr=str.split(" ");
	for(let i=0;i<arrStr.length;i++){

		//arrStr[i][0]=arrStr[i][0].toUpperCase();
		let letra=arrStr[i].charAt(0).toUpperCase()
		arrStr[i][0]=letra;
		//NOTA: cOMPLETAR EJERCICIO
		//No realiza asignacion de array-cadena mediante [][] ?
		
	}
	return arrStr;
}


console.log(tittleCase("hola este debe ser un titulo"));



