//PROMESAS
//una promesa se utiliza cuando se tiene la intencion de ejecutar algo
//generalmente asincrono
//Promise es una funcion constructor
//Se usa la palabra new para crearla
//toma una funcion como argumento que tiene los metodos resolve y reject
//ejemplo:
/*
 * const makeServerRequest=new Promise((resolve,reject)=>{}
 * );
 *
 */

const myPromise= new Promise((resolve, reject)=>{
	if(//condicion){
		resolve("Promise filfilled");
	}else{
		reject("Promise rejected");
	}
}
);



//then -> usado para hacer algu cuando la promesa es cumplida

myPromise.then(result=>{
	console.log("Resultado");
	}
);

//catch ->Metodo usado cuando la promesa no es cumplida
myPromise.cath(error=>{});


