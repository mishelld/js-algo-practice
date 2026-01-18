/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition(arr) {
  //your code
  let product = arr.reduce((acc, num) => acc * num, 1);
  if (product === 0) {
    let count = arr.filter((num) => num === 0);
    if (count.length >= 2) {
      return true;
    } else if (count.length === 1) {
      return false;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (product / arr[i] === arr[i]) {
      return true;
    }
  }
  return false;
}
console.log(canPartition([0, 1, 1, 1]));
exports.solution = canPartition;
