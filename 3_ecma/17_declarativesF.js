//Funciones declarativas concisas con ES6
//
//En ES5 usamos la palabra function para declarar una funcion:
/*
const person={
	name:"Taylor",
	sayHello: function(){
		return `Hello! My name is ${this.name}.`;
	}
};

console.log(person.sayHello()) 
//nota: si se escribe person.sayHello mostrara solo el nombre de la funcion
//si se escribe person.sayHello() mostrara el resultado de la funcion
//
*/

//ES6 permite feractorizar de la siguiente manera:
//
const person={
	name:"Taylor",
	sayHello(){
		return `Hello! My name is ${this.name}.`;
	}
};

console.log(person);
console.log(person.sayHello);
console.log(person.sayHello());


