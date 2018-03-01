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
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 57];
var gradeArray = [0, 0, 0, 0, 0];  //Stores counts of each grade
var gradeLegend = ["A", "B", "C", "D", "F"];  //Legend for letter grades of gradeArray

for (var i = 0; i < scores.length; i++) {
  if(scores[i] > 90) {
    gradeArray[0]++;
  } else if (scores[i] > 80) {
    gradeArray[1]++;
  } else if (scores[i] > 70) {
    gradeArray[2]++;
  } else if (scores[i] > 60) {
    gradeArray[3]++;
  } else {
    gradeArray[4]++;
  } //end if else for scores count
}
//Output results to DOM
var idGradeCount = document.getElementById("grade-count");
var idLowestCount = document.getElementById("lowest-grade");
var idHighestCount = document.getElementById("highest-grade");
// iterates through letter grades, outputs to DOM
for (var j = 0; j < gradeArray.length; j++) {
  idGradeCount.innerHTML += "<h3>" + "Number of " + gradeLegend[j] +  " grades: " + gradeArray[j] + "</h3>";
}
//Sort scores and output high/low values to DOM
scores.sort();
var lowestGrade = scores[0];
var highestGrade = scores[scores.length - 1];
idLowestCount.innerHTML = "<h4>" + "Lowest Grade was: " + lowestGrade + "</h4>";
idHighestCount.innerHTML = "<h4>" + "Highest Grade was: " + highestGrade + "</h4>";