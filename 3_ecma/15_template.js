//Template literals
//Tipo especial de string, permite crear cadenas multi-linea usando una plantilla
//
//consideraciones:
//- Se usan backticks (´) para colocar la cadena
//- Es posible usar salto de linea sin necesidad de \n
//- Se usa la sintaxis ${variable} como marcador para contener las variables
//- Se elimina la necesidad de usar + para concatenar
//
//ej:
const persona={
	name: "Sergio",
	age: 27
};

const saludo=`Hola ${persona.name}! veo que tienes ${persona.age} años.`;
console.log(saludo);


