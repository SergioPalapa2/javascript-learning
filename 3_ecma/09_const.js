//Constantes y mutabilidad

var arreglo1=[1,2,3];
console.log(arreglo1)

arreglo1=[2,4,6];
console.log(arreglo1) //nota: declarando el arreglo con var, es posible modificar directamente
	
const arreglo2=[4,5,6];
console.log(arreglo2);

//arreglo2=[5,6,7];  //error ya que no es posible modificar directamente

Object.freeze(arreglo2) //inmutabilidad
arreglo2[0]=7;//es posible modificar elemento por elemento, (si no se aplica Object.freeze())
arreglo2[1]=8;
console.log(arreglo2);



