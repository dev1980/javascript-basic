let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < arr.length; i++) {
  console.log(i + "   element: " + arr[i]);
  //   console.log(arr[i]);
  for (let j = 0; j < arr[i].length; j++) {
    console.log(j + " element : " + arr[i][j]);
  }
}
