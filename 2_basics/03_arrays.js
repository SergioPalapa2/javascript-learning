///MANEJO DE ARREGLOS

//arreglo simple 
var arreglo=[1,2,3,4,5];
console.log(arreglo);
console.log(arreglo[1]);//las posociones se seleccionan con []

//arreglos anidados
var datos=["Sergio","Palapa",[6,7,8,10],"Aprobado"];
console.log(datos);
console.log(datos[2]);//muestra el arreglo contenido en el arreglo 'datos'

//ejercicio sacar promedio
var promedio=(datos[2][0]+datos[2][1]+datos[2][2]+datos[2][3])/4;//seleccion de datos en arreglos anidados con [][]
console.log("Promedio:"+promedio);
console.log("Calificaciones promediadas: "+datos[2].length);


//MANIPULACION DE ARREGLOS
//push()--agrega elementos al final
//pop() --toma el ultimo valor de un arreglo
//shift() --remueve el primer valor del arreglo
//unshift() --agrega elementos al inicio del elemento

var calif=[5,6,6,8,10,9];

console.log("Arreglo original "+calif);
calif.push(2);
console.log(calif);
calif.pop();
console.log(calif);
/*
calif.shift();
calif.unshift(0);
*/


//ejemplo
var pets=["perro","gato","pez","serpiente","huron","cotorro"];
console.log(pets)

pets.push("iguana"); //agrega al final del arreglo
console.log(pets);


let ultimo=pets.pop(); //toma el ultimo valor
console.log(pets);
console.log(ultimo);

let primero=pets.shift();
console.log(pets);
console.log(primero);

pets.unshift("conejo");
console.log(pets)

