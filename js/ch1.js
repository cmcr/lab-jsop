//Chapter 1. Creating Objects
console.log("Chapter 1. Creating Objects");
//§ Creating ex nihilo objects
console.log("§ Creating ex nihilo objects");
obj = new Object();
obj.nombre = "Pancho";
obj.saluda = function(){return "Que tal, que vola!";}
console.log(obj.nombre+" "+obj.saluda());

obj1 = new Object()
obj1 = obj //now they refer to the same object
obj1.nombre = "Francisco"
console.log(obj.nombre) //output Francisco
console.log(obj1.nombre) //output Francisco
//
obj2 = {}
obj3 ={color: 'blue',
       toString: function(){return this.color;}
    };
console.log("obj3 "+obj3);
//
my_object = {
    size: 'large',
    color: 'blue',
    toString: function(){return this.size;}
};
console.log("my_object " + my_object);
//
obj4 = obj3;
console.log("obj4"+obj4.color);
//
var animales = ['gatos','perros', 'conejos', 'papagayos'];
function skrivare(args){
console.log(args);
}
skrivare(animales);

//§ OOP-Style Object Creation
console.log("§ OOP-Style Object Creation");

function Dog(name, breed) {
    var new_dog = this; // the new object

    new_dog.name = name;
    new_dog.breed = breed;
}
var pillo = new Dog('Pillo', 'Comelon')
console.log(pillo);

var snoopy = new Dog('Snoopy', 'Beagle');
var lassie = new Dog('Lassie', 'Collie');
Dog.prototype.speak = function() {
    return "Woof! Woof!";
}
console.log(snoopy.speak());
console.log(pillo.speak())
snoopy.speak(); // Woof! Woof!
lassie.speak(); // Woof! Woof!
Dog.prototype.who_am_i = function() {
    return "I'm " + this.name;
}
console.log(lassie.who_am_i()); // I'm Lassie
Dog.prototype.diet = "carnivore";
console.log(lassie.diet); // carnivore

//Getters and setters
lassie._private = "Verified data.";
Dog.prototype.get_private =
    function () { return this._private; }
Dog.prototype.set_private =
    function (privado) { this._private = privado}
console.log(lassie.get_private());
pillo.set_private("pillo no deice nada")
console.log(pillo.get_private());

//Default Values
function Cat(name, breed) {
    this.name = name;
    if (breed) { this.breed = breed; }
}
Cat.prototype.breed = 'mixed breed';
var mutt = new Cat( 'Mutt');
console.log("cat "+mutt.breed); // mixed breed

//§ Prototypal Object Creation
console.log(§ Prototypal Object Creation);
function Singer() {}; // no properties
var patty   = new Singer(),
    maxene  = new Singer(),
    laverne = new Singer();
//patty.sing(); // error, undefined method
//only patty sing
patty.sing = function () {
    return '...boogie woogie bugle boy...';
}
patty.sing(); //...boogie woogie bugle boy...
//all sings
Singer.prototype.sing = function () {
    return '...blows eight-to-the-bar...';
};
patty.sing(); // boogie woogie bugle boy
maxene.sing(); // blows eight-to-the-bar
laverne.sing(); // blows eight-to-the-bar
//The Prototype Chain

//Object Prototype Cloning
var lassie = {
    name: 'Lassie',
    breed: 'Collie',
    speak: function () {
        return 'Woof! Woof!'; }
};
var snoopy = Object.create(lassie);
snoopy.speak(); // Woof! Woof!
console.log("snoopy is: "+snoopy.name)
var clone = function(proto_obj) {
    var ret = {}; // �empty� object

    for ( var prop in proto_obj ) {
        ret[prop] = proto_obj[prop]; }
    return ret;
}
function Prototipo () {}
Prototipo.prototype.color = "rojo"
pt = new Prototipo()
var copia = Object.create(pt)
copia.numero = 2
console.log(copia.color)
console.log(copia.numero)
var copia = function (){return "copy"}
copia.color = "negro"
console.log(copia.color)
//
document.write("<input type='text' />")