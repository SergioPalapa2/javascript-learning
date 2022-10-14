//La asignacion DESTRUCTURING es una sintaxis especial para asignar valores
//tomados directamente de un objeto


//forma usual de asignar valores desde objetos
const usuario={name:"John Toe", age:29};
/*
const name=usuario.name;
const age=usuario.age;
console.log(name+" "+age)
*/

//el mismo proceso se puede realizar mediante:
const {name, age}=usuario //asignacion directa de objetos a variables con mismo nombre
console.log(name+" "+age)

//asignacion de variables con otro nombre
const{name:userName, age:userAge}=usuario;
console.log(userName);
console.log(userAge);


//ASIGNACION DE OBJETOS ANIDADOS
//la logica es la misma para asignar elementos anidados en objetos
//ej
const mascotas={
	perro:{nombre:"Odin",raza:"criollo",edad:1},
	gato:{nombre:"Solovina",raza:"criollo",edad:1}
}

const{perro:{nombre:Nom,edad:Ed}}=mascotas;
console.log(Nom+Ed);

//destructuring desde arreglos
//la diferencia de SPREAD con destructuring es que mediante spread resulta un array separado por comas
//y no es posible seleccionar que elementos se asignaran
//ejemplo:
const [a,b]=[1,2,3,5,6,7]; //las variables solo toman los dos promeros valores del arreglo
//const [a,b,,,c]=[1,2,3,4,5,6,7]  //se asignara 1,2,5
console.log(a,b);

//ejemplo
//swping de variables
let x=8, y=3;
[x,y]=[y,b];

console.log(x);

//recuperacion de contenido restanete en un array
const [v1,v2,...arr]=[1,2,3,4,5,6,7,8,9];
console.log(v1,v2);
console.log(arr);



//Destructuring de un objeto como parametro de un funcion

//ejemplo
/*
const profileUpdate=(data)=>{
	const {name,age,nationality,locat}=data;
}
*/
//la funcion de arriba puede escribirse de la siguiente forma:
const profileUpdate=({name, age, nationality,locat})=>{
	//bloque de la funcion
}

//de esta forma se aplica destructuring directo en los argumentos
//y las variables son usables dentro de la funcion

