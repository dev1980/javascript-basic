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

