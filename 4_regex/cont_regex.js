//para indicar rangos de patrones se usa {}
//ejemplo
//Encontrar solo las letras a que aparecen entre 3 y 5 veces
let string="ohhhhh lala";
let cregex=/oh{3,5}\slala/;
console.log(cregex.test(string));
console.log(string.match(cregex));


//es posible utilizar {2,} para indicar solo un numero nimino de coincidencias
//usando {} con solo un numero hace match el numero exacto


//Con ? se indica si el elemnto precedente puede o no estar en el patron
let american="color";
let british="colour";
let iregex=/colou?r/;
console.log(iregex.test(american));
console.log(american.match(iregex));

console.log(iregex.test(british));
console.log(british.match(iregex));
