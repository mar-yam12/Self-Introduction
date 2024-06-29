// Write an introduction of yourself using TYPESCRIPT

/// INTRODUCTION

console.log("Hello!, I'm a DEVELOPER")
console.log("I'm a student of GIAIC")

let personName:string= "Maryam Shahid";
let husbandName:string="Yousuf Nadeem"
let age:number= 16;
let married:string= "Married";
let education:string="Intermediate";
let skills:string[]=["Hafiz e Quran","Graphic Designer", "Digital Media Manager", "Programming learner"];
let experience:string= "less than 6 months";
let projects:string[]=["Hello World","Simple Calculator","Working on 45 Assignments of node js and typescript"];

// PRINT MY INFO
console.log(`My name is ${personName}, and My husband name is ${husbandName}.`);
console.log(`I am ${age} years old, and I am ${married}.`);
console.log(`I have done ${education}.`);
console.log("I have skills in:");
skills.forEach(skills => console.log("-" + skills));
console.log(`I have ${experience} experience of Information Technology.`);
console.log("My recent project is")
projects.forEach(projects => console.log("~" + projects));

//CONCLUSION
console.log("Thank you for getting to know me as a Web Developer")