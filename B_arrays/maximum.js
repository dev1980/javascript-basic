// Write a function `maximum` that accepts an array of numbers as an argument. The function should
// return the largest number of the array. If the array is empty, then the function should return null.

function maximum(arr) {
  if (arr.length === 0) {
    return null;
  }
  let largeElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largeElement) {
      largeElement = arr[i];
    }
  }
  return largeElement;
}
console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null
