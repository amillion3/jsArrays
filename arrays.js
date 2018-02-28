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

// example
var animals = ["fish", "dog", "cat"];
var animalzElement = document.getElementById("animalz");
for (var i = 0; i < animals.length; i++){
  // console.log("animals: " + animals[i]);
  animalzElement.innerHTML += "<h5>" + animals[i] + "</h5>";
}

//Challenge 2
//My solution:
var book1 = "Catch 22";
var book2 = "Slaughterhouse 5";
var book3 = "Fahrenheit 451";

console.log(book1.replace(/[A-z\W]/gi, ""));
console.log(book2.replace(/[A-z\W]/gi, ""));
console.log(book3.replace(/[A-z\W]/gi, ""));
//Zoe's solution:
var book = "catch 22";
var bookSplit = book.split("");
var realNumz = [];
for (var j = 0; j < bookSplit.length; j++) {
  if (bookSplit[j] * 1) {
    console.log("booksplit: " + bookSplit[j]);
    realNumz.push(bookSplit[j]);
  }
}
console.log(realNumz.join(""));

//Challenge 3