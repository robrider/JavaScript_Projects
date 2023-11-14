// Choose a variable and assign a value
var myNumber = 10;
var myString = "5";

// Choose a variable and assign a value
var myVariable = "Hello, World!";

// Display the variable
document.write("Value of myVariable: " + myVariable + "<br>");

// Display the data type of the variable
document.write("Data type of myVariable: " + typeof myVariable);

// Display the values and their types
document.write("Value of myNumber: " + myNumber + "<br>");
document.write("Data type of myNumber: " + typeof myNumber + "<br>");

document.write("Value of myString: " + myString + "<br>");
document.write("Data type of myString: " + typeof myString + "<br>");

// Perform a strange operation that involves type coercion
var result = myNumber + +myString; // The extra plus sign converts myString to a number

// Display the result and its type
document.write("Result of operation: " + result + "<br>");
document.write("Data type of result: " + typeof result);

// Utilize JavaScript to make the browser display NaN
var notANumber = "Hello" / 2; // Division by a non-number results in NaN
document.write("Value of notANumber: " + notANumber + "<br>");

// Utilize the isNaN() function to make the browser display “true”
var trueCheck = isNaN(notANumber);
document.write("isNaN() result (true): " + trueCheck + "<br>");

// Utilize the isNaN() function to make the browser display “false”
var falseCheck = isNaN(myNumber);
document.write("isNaN() result (false): " + falseCheck);

// Display positive infinity
var positiveInfinity = 1 / 0;
document.write("Positive Infinity: " + positiveInfinity + "<br>");

// Display negative infinity
var negativeInfinity = -1 / 0;
document.write("Negative Infinity: " + negativeInfinity);

// Using greater than operator
var isTrue = 5 > 2;
document.write("5 > 2 is " + isTrue + "<br>");

// Using lesser than operator
var isFalse = 3 < 1;
document.write("3 < 1 is " + isFalse);

// Performing math operations
var result = 10 * 5; // Multiplication operation
console.log("The result of 10 * 5 is:", result);

console.log(2 > 3); // This will output "false" in the console

console.log(5 == 5);  // This will output "true"
console.log(5 == '5');  // This will output "true" (due to type coercion)
console.log(5 == 3);  // This will output "false"

// 1. Return true by ensuring to match the data type and value.
console.log(10 === 10);  // This will output "true"

// 2. Return false by writing a different data type and different value.
console.log('hello' === 5);  // This will output "false"

// 3. Return false by writing a different data type but the same value for both.
console.log('10' === 10);  // This will output "false"

// 4. Return false by writing the same data type but a different value for both.
console.log(15 === 20);  // This will output "false"

// Utilize the AND operator to display true and false.
console.log(true && true);   // This will output "true"
console.log(true && false);  // This will output "false"

// Utilize the OR operator to display true and false.
console.log(true || false);  // This will output "true"
console.log(false || false); // This will output "false"

// Utilize the NOT operator to display true and false.
console.log(!true);  // This will output "false"
console.log(!false); // This will output "true"
