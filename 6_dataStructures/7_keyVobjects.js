//En su forma mas basica los objetos son colecciones de datos clave-valor.
//Es decir, son piezas de datos mapeados con un unico identificador (key)
//
const mkchar={
	player:'sub-zero',
	type:'ice',
	fatality:'under zero',
	human:true
}


mkchar.origin='Korea';//agrega nueva propiedad

mkchar['hair color']='black'; //agrega nueva propiedad

//Se usan [] para agregar una propiedad con espacios o el nombre es una variable


console.log(mkchar);

////////////Objetos anidados
//Un objeto puede contener a su vez mas estructuras de datos (arrays y objetos)
//Se puede acceder a las propiedades mediante .

console.log(mkchar.player);


//Acceso mediante []
//Al usar [] para acceder a un objeto este devuelve el valor key, o undefined si es que no lo encuentra
let propiedad='origin';
console.log(mkchar[propiedad]);//nota: solo admite variables





//Uso de la palabra reservada 'delete' para eliminar propiedades de un objeto
//
const carrito={
	articulo: ['azucar','caja vino','caña','saborizante'],
	estado: 'Proceso',
	pagado:false,
	fecha:'23-06-2022'
} 

console.log(carrito.fecha);
delete carrito.fecha;
console.log(carrito.fecha);


//Validar si un objeto contiene una determinada propiedad
//metodo1: metodo hasOwnProperty()
//metodo2: palabra reservada 'in'
//

const team1={
	Sergio:{estatus:'activo',grado:4,especialidad:'computacion' },
	Kami:{estatus:'activo',grado:4,especialidad:'soporte'}	
}


//keyword
console.log('Kami' in team1);

const buscarEquipo=(team)=>{
	if(
		//metodo
		team.hasOwnProperty('Sergio')&&
		team.hasOwnProperty('Kami')
	){return true}else{return false}
}


console.log(buscarEquipo(team1));




//Iteracion de un objeto
//Sintaxis for...in
//

const conteo=(obj)=>{
	let count=0;
	for(let prop in obj){
		console.log(prop);
	}
}

console.log(conteo())


conteo(mkchar);


//Almacenar keys de un objeto en un arreglo
//Metodo: Object.keys()
//Regresara un arreglo con todas las propiedades, sin orden en especifico
//
const mkkeys=Object.keys(mkchar);
console.log(mkkeysmkkeys);


