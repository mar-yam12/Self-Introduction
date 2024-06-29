// Write an introduction of yourself using TYPESCRIPT
/// INTRODUCTION
console.log("Hello!, I'm a DEVELOPER");
console.log("I'm a student of GIAIC");
var personName = "Maryam Shahid";
var husbandName = "Yousuf Nadeem";
var age = 16;
var married = "Married";
var education = "Intermediate";
var skills = ["Hafiz e Quran", "Graphic Designer", "Digital Media Manager", "Programming learner"];
var experience = "less than 6 months";
var projects = ["Hello World", "Simple Calculator", "Working on 45 Assignments of node js and typescript"];
// PRINT MY INFO
console.log("My name is ".concat(personName, ", and My husband name is ").concat(husbandName, "."));
console.log("I am ".concat(age, " years old, and I am ").concat(married, "."));
console.log("I have done ".concat(education, "."));
console.log("I have skills in:");
skills.forEach(function (skills) { return console.log("-" + skills); });
console.log("I have ".concat(experience, " experience of Information Technology."));
console.log("My recent project is");
projects.forEach(function (projects) { return console.log("~" + projects); });
//CONCLUSION
console.log("Thank you for getting to know me as a Web Developer");
