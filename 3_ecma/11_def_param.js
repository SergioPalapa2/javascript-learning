//Definir parametros por default en funciones
//ejemplo
const greeting=(name="new guy")=>"Hello "+name;

console.log(greeting());
console.log(greeting("Checho"));

//puede haber mas de un parametro en la funcion
//
const incremento=(num,valor=1)=>num+valor;
console.log(incremento(1));


