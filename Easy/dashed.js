/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(str) {
  const vowel = "AaEeIiOoUu";
  let new_str = "";
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      new_str += "-" + str[i] + "-";
    } else {
      new_str += str[i];
    }
  }
  return new_str;
  //your code
}
console.log(dashed("Fight for your right to party!"));
exports.solution = dashed;
