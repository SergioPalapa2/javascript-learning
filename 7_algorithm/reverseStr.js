//Tomar una cadena y devolverla en orden inverso
//
//Metodo 1
const reverse=(str)=>{
	let reversed='';
	for(let i=str.length-1;i>=0;i--){
		reversed+=str[i];
	}
	return reversed;
}



//Metodo 2
const reverse2=(str)=>{
	return str.split("").reverse().join("");
}




console.log(reverse('Hola mundo'));

console.log(reverse2('Hola mundito'));
