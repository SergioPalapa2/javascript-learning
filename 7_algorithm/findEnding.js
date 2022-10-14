//Funcion que confirma si una cadena finaliza con un segmento dado
//
const findFinal=(str,target)=>{
	if(str.slice(-target.length)==target){
		return true
	}else{return false}
}

let cadena="Esta es una fucking cadena";
let subcadena=cadena.slice(-3);//usando signo - en slice, nos regresa los elementos realizando el conteo desde el final
console.log(subcadena);


console.log(findFinal(cadena,'ena'));
