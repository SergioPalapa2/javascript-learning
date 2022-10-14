//Encontrar la palabra mas larga en un enunciado dado
//

const longestW=(str)=>{
	let array=str.split(" ");
	let numbers=[];
	for(let i=0;i<=array.length-1;i++){
		numbers.push(array[i].length);
	}
	
	let res=Math.max(...numbers);
	return res;
}


console.log(longestW('Esta es una cadena con una palabra largisimisima'));
