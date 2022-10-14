//OBJETOS//
//
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

//acceso a las propiedades
console.log(cat["name"]);
console.log(cat["enemies"][0]);



cat.name="Charus"; //cambio del valor
console.log(cat);

cat.food="catchow"; //se agrega la propiedad food solo con la asignacion
console.log(cat);


//Objeto dentro de un array

var arreglo=[1,2,3,4,5,{artista:"bj",anio:"1998"}];
console.log(arreglo);


//acceso a objetos anidados

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; //se usa [] cuando el nombre contiene espacios


var arr = [
  [1,2], [3,4], [5,6]
];
//acceso mediante ciclo FOR
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

