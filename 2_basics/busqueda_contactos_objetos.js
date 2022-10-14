
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  var c;
  var nom;
  var prop;
  
  for(c=0;c<=contacts.length-1;c++){
	  
	   if(contacts[c].firstName==name){
			if(contacts[c].hasOwnProperty(prop)){
				return contacts[c][prop];
			}else{return "No such property";}				
	   }	   
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));

