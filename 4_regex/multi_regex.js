//Busqueda de multiples patrones en un mismo string
//Dos tipos de "lookaheads", positivos y negativos
//
//(?=...)  -> Se asegurara de que el elemento existe, pero no la obtendra.
//(?!...)  -> Se asegurara de que el elemento no existe. El resto del patron se regresara.
//
let sampled="astronauta";
let pregex=/(?=\w{6})(?=\w*\d{2})/; 
console.log(pregex.test(sampled));


//para agrupar diferentes patrones usamos (|)
let testStr="pumpkin";
let testregex=/p(engu|umpk)in/;
console.log(testregex.test(testStr));



//capturar multiples subcadenas iguales
//PENDIENTE
//

