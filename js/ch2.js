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
