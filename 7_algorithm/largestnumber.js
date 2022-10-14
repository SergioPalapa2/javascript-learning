//Funcion que regresa un arreglo conformado por el numero mas grande de cada sub arreglo de un arreglo inicial dado
//

const largestof=(arr)=>{
	res=[];
	for(let i=0;i<=arr.length-1;i++){
		res.push(Math.max(...arr[i]));
	}
	return res;
}


let arreglo=[[1,2,3,4],[2,4,6,8],[2,2,6,9],[1,1,1,2]]
let num=largestof(arreglo);
console.log(num);



