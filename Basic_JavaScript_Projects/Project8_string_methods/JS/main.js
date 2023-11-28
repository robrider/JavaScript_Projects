// JavaScript function for the precisionMethod
function precisionMethod() {
    var X = 12938.3012987376112;
    document.getElementById("toPrecisionResult").innerHTML = X.toPrecision(10);
}

// JavaScript function to change the heading text
function changeHeading() {
    var newHeading = "Project 8 String Methods";
    document.getElementById("heading").innerText = newHeading;
}

// Function using concat() method for strings
function concatStrings(str1, str2) {
    let result = str1.concat(" ", str2); // Concatenate two strings with a space in between
    document.getElementById("concatResult").innerHTML = "Concatenated String: " + result;
}

// Function using slice() method for strings
function sliceString(originalString, startIndex, endIndex) {
    let slicedString = originalString.slice(startIndex, endIndex); // Extract a portion of the string
    document.getElementById("sliceResult").innerHTML = "Sliced String: " + slicedString;
}

// Function using toString() method for numbers
function numberToString(originalNumber) {
    let stringRepresentation = originalNumber.toString(); // Convert number to string
    document.getElementById("toStringResult").innerHTML = "String Representation: " + stringRepresentation;
}

// Function using toPrecision() method for numbers
function precisionNumber(originalNumber, precision) {
    let precisionValue = originalNumber.toPrecision(precision); // Format number with specified precision
    document.getElementById("precisionResult").innerHTML = "Precision Number: " + precisionValue;
}

// Call the functions
changeHeading();
concatStrings("Hello", "World!");
sliceString("JavaScript is awesome", 11, 19);
numberToString(42);
precisionNumber(3.14159, 4);
precisionMethod();
