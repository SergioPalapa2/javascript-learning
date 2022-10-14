//EXPRESIONES REGULARES
//Las expresiones regulares se utilizan para encontrar palabras
//Se crean patrones

//con el metodo .test() es posible saber si existen conicidencias en strings
//La busqueda se hace de forma literal, haciendo distincion entre mayus/min
let palabra="hola javascript";
//let regex=/Hola/;
let regex=/hola/;

let resultado=regex.test(palabra);
console.log(resultado);

//usando el operador |(or) es posible buscar mas de un patron por busqueda
let cadena1="James tiene un pajaro";
let regex1=/perro|gato|pajaro|pescado/;
let resultado1=regex1.test(cadena1);
console.log(resultado1);

//////////////////////////
//Es posible ignorar la distincion entre mayusculas y minusculas con -i(ignore flag)
let nombre="Sergio";
let regex2=/sergiO/i;
console.log(regex2.test(nombre));

//EXTRARER CONICIDENCIAS
//metodo match() <-Se aplica el metodo a la cadena, pasando la regex dentro de parentesis
let res="Esta es una cadena de ejemplo".match(/cadena/);
console.log(res);
//console.log(cadena2.match(regex3));
//nota: Se regresa un arreglo de varios elementos


//Extraer mas de una coincidencia
//bandera -g(global)
let twinkleStar="twinkle, Twinkle, little star";
let starRegex=/twinkle/gi;//uso de bandera 'g' y 'i'
star=twinkleStar.match(starRegex);
console.log(star);

//Extraer elemento usando wildcard .
let exampleStr="Let's have fun with regular expressions!";
let unregex=/.un/;
console.log(unregex.test(exampleStr));


//Extraer con character classes /[]/  nota: se usan brackets para colocar caracteres permitidos o no permitidos
let quoteSample="Beware of bugs in the above code; I have only proved it correct, not tried it ";
let vowelRegex=/[aeiou]/gi;
let vowels= quoteSample.match(vowelRegex);
console.log(vowels)


//RANGOS DE CARACTERES
//usando [a-e] rango de caracteres
let quoteSample1="The quick brown fox jumps over the lazy dog";
let alphabetRegex=/[a-z]/gi;
console.log(quoteSample1.match(alphabetRegex));


//Negacion de caracteres
//Se coloca un ^ despues de [ y los caracteres a negar
let quoteSample2="3 blind mice";
let notRegex=/[^aeiou0-9]/gi; //niega vocales y cualquier numero
console.log(quoteSample2.match(notRegex));

//caracteres repetidos
//se usa + despues de la literal para encontrar repetidos consecutivos
let quoteSample3="Mississipi";
let repRegex=/s+/gi;
console.log(quoteSample3.match(repRegex));


//con * se encuentran caracteres que ocurren cero o mas veces
//ex
let soccerWord="Gooooooooal!";
let gPhrase="gut feeling";
let oPhrase="over the moon";
let goRegex=/go*/gi;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));


let chewieQuote="Aaaaaaaaaaaaaaaarrrrgh!";
let chewieRegex=/Aa*/;
console.log(chewieQuote.match(chewieRegex));
