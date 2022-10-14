//Escritura de objetos literales osando pa propiedad shorthand de los objetos
//
//ejemplo:
/*
const getMousePosition=(x,y)=>({
	x:x;
	y:y
});
*/
//duda: parentesis rodea el cuerpo de la funcion?????

//se trata de una simple funcion que regresa un objeto que contiene dos propiedades
//esta puede simplificarse de la siguiente forma:
//
const getMousPosition=(x,y)=>({x,y});
console.log(getMousPosition(6,5));

