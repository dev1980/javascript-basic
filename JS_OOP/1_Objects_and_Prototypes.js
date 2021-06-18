// this will print empty object
var myObj = {}

console.log(myObj)


var myObj = {
"foo": "Value",
"age": 30,
"address": {
    "street": "123 JS",
    "city": "JS",
    "pincode": 1345
}

}

9804871071

console.log(myObj)
console.log(myObj["address"])



// We can create object to solve the programming problem. 
//There are 3 way of creating object in javascript.
// 1. By object literal , 2. Using new keyword, 3. Using a Object constructor

var emp1 = {}
emp1.firstName = "Brham Dev"
emp1.lastName = "Mahato"
emp1.gender = "male"
emp1.degination = "Manager"

var emp2 = {}

emp2.firstName = "sarita"
emp2.lastName = "Mahato"
emp2.gender = "female"
emp2.degination = "Accountant"

// You dont want to repeat the code multiple type.
//so how we can sovle this problem.

function createEmployeeObject(firstName, lastName, gender, degination) {
    var newObject = {}
    newObject.fname = firstName;
    newObject.lname = lastName;
    newObject.gender = gender;
    newObject.degination = degination;
    return newObject
}

var emp3 = createEmployeeObject("dev", "lama", "male", "Driver")

console.log(emp1)
console.log(emp2)
console.log(emp3)

// this way of creating object in javascript is very common in javascript,
//but language provide shortcut way to write the same code using constructor way.

function Employee(firstName, lastName, gender, degination) {
    // var newObject = {}
    this.fname = firstName;
    this.lname = lastName;
    this.gender = gender;
    this.degination = degination;
    // return newObject
}

var emp4 = new Employee("Hari", "krishna", "male", "Driver")


// Threre is total 4 way of calling function

function foo() {
    console.log("Hello");
    console.log(this)
}

foo(); // this is first way of calling function in javascript , Method 1
// value of this is referance to global object. i.e window

var obj = {"name": "Brham Dev"};
obj.foo = function() {
    console.log("Hello from object");
    console.log(this)

}


obj.foo() // function is the propety of object. Mehtod 2

// if we calling the function in context of object the this refer to the object whose property is the function.

// executing fuction in constrcution way , Method 3 , new foo()

// Lets talk aboaut the execution concept in Javascript. this is the concept in most programming language.
// when function is called it always called in certain context. execution context.

//The value of this is always depends on the function call.


// new foo()

// Here this refer to the new object it create or first it will be empty object

function foo() {
    // var this = {}
    console.log("Hello");
    console.log(this)
    // return this
}

new foo();

// here u will get empty object.

function Bicycle(cadance, speed, gear, tirePressure) {
this.cadance = cadance;
this.speed = speed;
this.gear = gear;
this.tirePressure = tirePressure;
this.inflateTire = function(){
    this.tirePressure += 3;
}

}

let bicycle1 = new Bicycle(50,20,4,25);
bicycle1.inflateTire();

function Mechanic(name){
this.name = name;
}

var mike = new Mechanic("Mike");

mike.inflateTire.call(bicycle1)