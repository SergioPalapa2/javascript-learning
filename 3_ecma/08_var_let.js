///////////ALCANCE DE VAR Y LET
//prueba 1
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}

console.log(numArray);
console.log(i);//la consola despliega 3 ya que se actualiza por i++


//ejemplo 2
var imprime2;
for(var i=0;i<3;i++){
    if(i===2){
        imprime2=function(){
            return i;
        }
    }
}
console.log(imprime2()); //imprimira 3, debido a que imprime la variable global actualizada por i++

////////ejemplo3 let
let print2;
for(let i=0;i<3;i++){
    if(i===2){
        print2=function(){
            return i;
        }
    }
}

console.log(print2());
//console.log(i);  //da error ya que no esta definida como global (nota: si esta declarada en otros ejemplos)
