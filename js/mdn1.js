//Introduction to Object-Oriented JavaScript
// global namespace
var MYAPP = MYAPP || {};
//In the above code sample, we first checked whether MYAPP is already defined (either in same file or in another file). If yes, then use the existing MYAPP global object, otherwise create an empty object called MYAPP which will encapsulate methods, functions, variables, and objects.

//We can also create sub-namespaces (keep in mind that the global object needs to be defined first):

// sub namespace
//MYAPP.event = {};
//The following is code syntax for creating a namespace and adding variables, functions, and a method:

// Create container called MYAPP.commonMethod for common method and properties
MYAPP.commonMethod = {
  regExForName: "", // define regex for name validation
  regExForPhone: "", // define regex for phone no validation
  validateName: function(name){
    // Do something with name, you can access regExForName variable
    // using "this.regExForName"
  },
 
  validatePhoneNo: function(phoneNo){
    // do something with phone number
  }
}

// Object together with the method declarations
MYAPP.event = {
    addListener: function(el, type, fn) {
    // code stuff
    },
    removeListener: function(el, type, fn) {
    // code stuff
    },
    getEvent: function(e) {
    // code stuff
    }  
    // Can add another method and properties
}

// Syntax for Using addListener method:
MYAPP.event.addListener("yourel", "type", "callback");

//§ Standard built-in objects

console.log(Math.random());

//Every object in JavaScript is an instance of the object Object and therefore inherits all its properties and methods.

// The class
//JavaScript is a prototype-based language and contains no class statement, such as is found in C++ or Java. This is sometimes confusing for
//programmers accustomed to languages with a class statement. Instead, JavaScript uses functions as constructors for classes. Defining a 
//class is as easy as defining a function. In the example below we define a new class called Person.

var Person = function (firstName) {
  this.firstName = firstName;
  console.log('Person instantiated');
};
//The methods
Person.prototype.sayHello = function() {
	  console.log("Hello, I'm " + this.firstName);
	};

var person1 = new Person('Alice');
var person2 = new Person('Bob');

// Show the firstName properties of the objects
console.log('person1 is ' + person1.firstName); // logs "person1 is Alice"
console.log('person2 is ' + person2.firstName); // logs "person2 is Bob"
person1.sayHello(); // logs "Hello, I'm Alice"
person2.sayHello(); // logs "Hello, I'm Bob"

var helloFunction = person1.sayHello;
person1.sayHello();
person2.sayHello();
helloFunction();                                    
// logs true
console.log(helloFunction === person1.sayHello);
// logs true
console.log(helloFunction === Person.prototype.sayHello);

//Inheritance
// Define the Person constructor
// Add a couple of methods to Person.prototype
Person.prototype.walk = function(){
  console.log("I am walking!");
};

// Define the Student constructor
function Student(firstName, subject) {
  // Call the parent constructor, making sure (using call)
  // that "this" is set correctly during the call
  Person.call(this, firstName);

  // Initialize our Student-specific properties
  this.subject = subject;
}

// Create a Student.prototype object that inherits from Person.prototype.
// Note: A common error here is to use "new Person()" to create the
// Student.prototype. That's incorrect for several reasons, not least 
// that we don't have anything to give Person for the "firstName" 
// argument. The correct place to call Person is above, where we call 
// it from Student.
Student.prototype = Object.create(Person.prototype); // See note below

// Set the "constructor" property to refer to Student
Student.prototype.constructor = Student;

// Replace the "sayHello" method
Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + ". I'm studying "
              + this.subject + ".");
};

// Add a "sayGoodBye" method
Student.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};

// Example usage:
var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

// Check that instanceof works correctly
console.log(student1 instanceof Person);  // true 
console.log(student1 instanceof Student); // true

//Regarding the Student.prototype = Object.create(Person.prototype); line: 
//On older JavaScript engines without Object.create, one can either use a "polyfill" (aka "shim", see the linked article), or one can
//use a function that achieves the same result, such as:
function createObject(proto) {
    function ctor() { }
    ctor.prototype = proto;
    return new ctor();
}

// Usage:
//Student.prototype = createObject(Person.prototype);
//Note: See Object.create for more on what it does, and a shim for older engines.
//Making sure that this points to the right thing regardless of how the object is instantiated can be difficult. However, there is a simple idiom to make this easier.

var OldPerson = function(firstName) {
  if (this instanceof Person) {
    this.firstName = firstName;
  } else {
    return new Person(firstName);
  }
}

var foo = function () {};
// logs "foo is a Function: true"
console.log('foo is a Function: ' + (foo instanceof Function));
// logs "foo.prototype is an Object: true"
console.log('foo.prototype is an Object: ' + (foo.prototype instanceof Object));

//Wikipedia - Object-oriented programming
//Wikipedia - Prototype-based programming
//Wikipedia - Encapsulation (object-oriented programming)
//
//Function.prototype.call()
//Function.prototype.apply()
//Object.create()
