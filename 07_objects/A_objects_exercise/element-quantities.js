// Create a function `elementQuantities` that accepts an object as an argument. The object contains
// elements as keys and quantities as values. The function should return an array containing the elements
// appearing with the correct quantities. See the examples.

function elementQuantities(obj) {
    let result = []
    let values = Object.values(obj)
    let keys = Object.keys(obj)
   
    for(let i =0; i < values.length; i++){
       num = values[i]
       str = keys[i]
       for(let j= 0; j < num; j++){
           result.push(str)
       }
   }
   return result;
    }
   



let quantities1 = { cat: 3, bird: 1, dog: 2 };
console.log(elementQuantities(quantities1)); // ['cat', 'cat', 'cat', 'bird, 'dog', 'dog']

let quantities2 = { blue: 3, brown: 1 };
console.log(elementQuantities(quantities2)); // ['blue', 'blue', 'blue', 'brown']