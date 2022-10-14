//Repite una cadena con base a un valor pasado cmo parametro a la funcion
//

const repeat=(str,num)=>{
	let finalStr='';
	for(let i=0;i<num;i++){
		finalStr+=str;
	}
	return finalStr;
}


console.log(repeat('Cadenita',5));
