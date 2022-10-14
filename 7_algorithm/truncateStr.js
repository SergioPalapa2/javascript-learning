//Cortar una cadena (1er argumento) si sobrepasa un maximo numero de caracteres (2do argumento)
//Devuelve la cadena truncada con un ... al final
//

const cortar=(str,num)=>{
	let newstr='';
	if(str.length>num){
		for(let i=0;i<num;i++){
			newstr+=str[i];
		}
		newstr+='...';
		return newstr;
	}else{return str}
}

let cadena="este es un texto de prueba";

console.log(cortar(cadena,7));
