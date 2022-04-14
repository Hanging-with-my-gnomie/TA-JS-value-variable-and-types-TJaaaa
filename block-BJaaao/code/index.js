 // Using alert, prompt, confirm and console

/*

1. Do the following using `alert` function. When you find any square bracket
 replace that to the value of the variable.

*/

let num1 = 21;
let num2 = 32;

/*
- Create a variable named `language` and store the value of `JavaScript` in it
- Alert message saying `I am learning [language]`
- Alert `The value of num1 is [num1] and the value of num2 is [num2]`
- Alert `The sum of [num1] and [num2] is [num1 + num1]`
*/
let language ="Javascript"
alert("I am learning Javascript");
alert("The value of num1 is 21  and the value of num2 is 32");
alert("The sum of [21] and [32] is [53]");
/*
2. Do the following using `alert`, `prompt` and `confirm` and `console`

  - Using prompt accept the name of the user and store it a variable names `userName`
  - Using prompt accept the profession of the user and store it a variable names`userProfession`
  - Using confirm check if user is adult or not and store the value in `isAdult`
  - Alert message `I am [userName] a [userProfession]`
  - Log the message `I am [userName] a [userProfession]`
  - Alet message `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
  - Log the message using console.log `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
*/
let userName = "Rajnish"
prompt("what is your name");
let userProfession = "Doctor"
prompt("what is your profession");
 let isAdult ="21"
 confirm("Are you an adult");
 alert("I am Rajnish a Doctor");
 console.log("I am Rajnish a Doctor");
 
/*
. Addition using prompt

  - Accept two number values form user and store them in `numA` and`numB`.
  - Alert the sum of both numbers. [numA + numB]
  - Alert [numA - numB]
  - Alert [numA * numB]
  - Log using console.log [numA - numB]
  - Log using console.log [numA * numB]
*/
let numA = 6;
let numB = 8;
let sum = numA + numB;
let difference = numA - numB;
alert("sum of numA and numB is 14");
alert("difference of numA and numB is -2");
alert("numA*numB is 48");
console.log("numA-numB is -2");
console.log("numA*numB is 48");