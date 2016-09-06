// Chapter 2. Object programing
console.log("%c Chapter 2. Object programing", "font-weight: bold");
//§ Programming with Properties
console.log("%c § Programming with Properties", "font-weight: bold");
var pais = new Object();
//Two ways for properties declaration:
//dot notation  and subscript notation
pais.nombre = "Cuba";
pais['lengua'] = "Español";
console.log(pais);
//Copy properties
var sum = function (old_object, new_object) {
    var ret = {};
    for (var prop in old_object) {
            ret[prop] = old_object[prop]; }
    for (prop in new_object) {
            ret[prop] = new_object[prop]; }
    return ret;
}
var oldObj = new Object();
var newObj = new Object();
oldObj.name = "viejo";
newObj.color = "azul";
console.log(sum(oldObj, newObj));
//
var l = window.location;
delete window.location['href'];
console.log(l.href); // don't work

var cielo = {};
cielo.color = "azul";
cielo.size = "grande";
console.log(cielo);
delete cielo.color;
console.log(cielo);
//?
function Person(name, age, gender) {
    var new_person = this // the new object
    Person.init(new_person, name, age, gender)
}
    Person.init = function (new_person, name, age, gender){
    new_person.name = name
    new_person.age = age
	if(gender){new_person.gender = gender}
}
Person.prototype.setName= function(name){
    this.name = name
}
Person.prototype.getName = function(){
    return this.name
}
Person.prototype.setAge = function(age){
    this.age = age
}
Person.prototype.getAge = function(){
    return this.age
}
Person.prototype.setGender = function(gender){
    this.gender = gender
}
Person.prototype.getGender = function(){
    return this.gender
}
Person.prototype.toString = function() {
    return "Name = "+this.name;
}

var pepe = new Person('Jose', '60')
console.log(pepe)
console.log(pepe.toString())
var pepa = new Person('Pepa', 55, 'F')
console.log(pepa)
var pancho = new Person('Pancho')
pancho.setAge(50)
console.log(pancho.getAge())

function Worker (name, age, gender, title){
    var new_worker = this
	Worker.init(new_worker, name, age, gender, title)
}
Worker.init = function(new_worker, name, age, gender, title){
    Person.init(new_worker, name, age, gender)
	new_worker.title = title
}
var dominguito = new Worker('Dominquito', 50, 'M', 'Enfermero')
console.log(dominguito)
console.log(dominguito.age)
console.log(typeof dominguito)
console.log(dominguito instanceof Worker)

Worker.prototype = new Person("",0,"")
Worker.prototype.setTitle = function(title){
    this.title = title
}
Worker.prototype.getTitle = function(){
    return this.title
}
Worker.prototype.setSalary = function(salary){
    this.salary = salary
}
var toto = new Worker("Toto",56,"M","mecanico")
toto.setSalary(100)
console.log(toto)

var pepe2 = new Worker('Jose Manuel', '60')
console.log(pepe2)

function Biologist(){}
Biologist.prototype = new Worker("", 0, "", "")
var biologist = new Biologist("Amapola", 50, "F", "botany")
biologist.setName("Amapola")
biologist.setAge(51)
biologist.setGender("F")
biologist.setTitle("botany")
console.log(biologist)

var ch =  document.documentElement.clientWidth
console.log(ch)
console.log("===")
//
