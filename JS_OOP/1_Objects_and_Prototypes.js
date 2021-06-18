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
//but language provide shortcut way to write the same code.