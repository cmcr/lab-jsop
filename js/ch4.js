// Chapter 4.  Inheritance Practice
console.log("%c Chapter 4.  Inheritance Practice", "font-weight: bold");
//§ Cascading init() Methods for Data
console.log("%c § Cascading init() Methods for Data", "font-weight: bold");

function Automovil(new_automovil, name, color){
	var new_automovil = this;
	Automovil.init(new_automovil, name, color);
}
Automovil.init = function(new_automovil, name, color){
	new_automovil.name = name;
	new_automovil.color = color;
}

function Motocicleta (name, color, marca){
	var new_motocicleta = this;
	Motocicleta.init(new_motocicleta, name, color, marca);	
}
Motocicleta.init = function(new_motocicleta, name, color, marca){
	Automovil.init(new_motocicleta, name, color);
	new_motocicleta.marca = marca;
}
Motocicleta.prototype.movimiento = function(){
	console.log("Motocicleta en movimiento");
}

var moto = new Motocicleta("Jaguar", "rojo", "Mitos");
console.log(moto);
console.log(moto.movimiento());
	
//§ Prototypes for Methods
console.log("%c § Prototypes for Methods", "font-weight: bold");
