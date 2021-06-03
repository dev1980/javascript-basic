// Write a function `maxObjectValue` that accepts an object as an argument. Write a function that
// returns an array containing the key, value pair for the largest value within the object. You can
// assume that all values are numbers and there are no ties.

function maxObjectValue(obj) {
   
    let values = Object.values(obj)
    let keys = Object.keys(obj) 
    let num = values[0]
    let v = keys[0]
    for(let i = 1; i < values.length; i++) {
        if(num < values[i]){
            num = values[i]
            v = keys[i]
        }
    }
    return [v, num]
}

console.log(maxObjectValue({ a: 5, b: 2, c: 6, d: 7, e: 4 })); // ['d', 7]
console.log(maxObjectValue({ lychee: 11, rambutan: 13, papaya: 9 })); // ['rambutan', 13]