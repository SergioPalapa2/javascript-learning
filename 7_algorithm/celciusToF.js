//Convertir una temperatura en celsuis a grados Farenheit
//Formula: F=C(9/5)+32

const convertCF=(celsius)=>{
	let far=celsius*(9/5)+32;
	return far;
}


temp=convertCF(1);
console.log(temp);
