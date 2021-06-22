// prototype let u create the object using blueprint.
// when javascript engine process object 

function Bicyle(cadence, speed, gear) {
    console.log(this)
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    console.log(this)
    console.log("dfdlkfasf")
}


let bike1 = new Bicyle(50,20,4)
let bike2 = new Bicyle(55,24, 4)
console.log("last call")
console.log(bike1)
console.log(bike2)


let arr = ["brham", "mahesh", 4,5];

console.log(arr)

// once every function execute it will careate two object. 
// eg function foo() { }
// foo  holds function object and foo.prototype = prototype object
// But if we execute the function using new keyword then it creates a new object which has propery of __proto__ and it points to prototype object

function foo() {

}

foo.prototype = {text: "Hello world from oject", message: "I love you"}


var newObj = new foo();

console.log(newObj.__proto__)


