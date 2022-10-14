//Al usar ^ fuera del set [] buscara patrones al inicio de un string

let firstString="Ricky sera encontrado aqui";
let firstRegex=/^Ricky/;

console.log(firstRegex.test(firstString)); //regresa true ya que si encunetra el patron al inicio


//Se usa $ para encontrar patrone al final de un string
let lastString="En esta cadena encontramos la palabra: patron";
let lastRegex=/patron$/;

console.log(lastRegex.test(lastString));

//shortcut \w reemplaza /[A-Za-z0-9_]/ incluye mayusculas, minusculas y _
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);

//se logra el efecto contrario con \W ->busca todo menos numeros y letras


//busqueda de numeros opr digito mediante \d
let movieName="2001: Espace odyssey";
let numRegex=/\d/gi;
let resNum=movieName.match(numRegex).length;
console.log(resNum)
//la busqueda contraria se realiza con \D ->busca todo menos numeros de un digito


//Validador de Nombres de usuario
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result1 = userCheck.test(username);
console.log(result1);
//^ inicio de input
//[a-z] primer caracter es una letra
//[a-z]+ las siguientes caracteres son letras
//\d*$ input acaba con 0 o mas digitos
// | operador or
// \d\d+ los siguientes caracteres son 2 o mas digitos
// $ fin del input


//encontrar espacios en blanco con \s
//o buscar todo exepto espacios enblanco \S
//

