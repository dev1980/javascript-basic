// Write a function `reverseArray` that accepts an array as an argument. The function should return a
// array containing the elements of the original array in reverse order.

function reverseArray(arr) {
  let i = arr.length - 1;
  let newArr = [];
  for (let j = i; j >= 0; j--) {
    newArr.push(arr[j]);
  }
  return newArr;
}

console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]
