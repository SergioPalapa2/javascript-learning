//getters y setters
//De un objeto se pueden obtener(get) datos y se pueden cambiar(set) los datos de las propiedades
//La funcion getter regresa el valor de una variable privada del objeto
//La funcion setter modifica el valor de una variable basado en el valor de setter
//
class book{
	constructor(author){
		this._author=author;
	}

	//getter
	get writer(){
		return this._author;
	}

	//setter
	set writer(updatedAuthor){
		this._author=updatedAuthor;

	}
}

const novel=new book('anonymous');

console.log(novel.writer); 
novel.writer=('newAuthor');
console.log(novel.writer);
//nota: Es convencion nombrar variables provadas anteponiendo _
//esto no las convierte necesariamente en privadas
//
//EJEMPLO
class termostato{
	constructor (farenheit){
		this.farenheit=farenheit;
	}

	get temperatura(){//lo que regresara la clase
		return (5/9)*(this.farenheit -32);
	}

	set temperatura(celcius){
		this.farenheit=(celcius*9.0)/5+32;
	}
}


console.log(termostato);
const termo=new termostato(76); //
console.log(termo);




























