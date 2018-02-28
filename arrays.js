console.log("Allo");

// Challenge 1
var test1 = "cat";  //false
var test2 = "racecar"; //true
var test3 = "bear"; //false
var test4 = "mom"; //true

var opposite = test2.split("").reverse().join("");
//split it (to a string) "c","a","t"
//reverse order of letters "t","a","c"
//join letters back together as a single string "tac"

if (test2 === opposite) {
  console.log("palindrome");
} else {
  console.log("not a palindrome");
}

// if (test2 === test2.reverse()) {
//   console.log("palindrome");
// }
// else {
//   console.log("not a palindrome");
// }