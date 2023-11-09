// Function for addition
function additionFunction() {
    var result = 5 + 3;
    document.getElementById("result1").innerText = "Result of addition: " + result;
}

// Function for subtraction
function subtractionFunction() {
    var result = 8 - 2;
    document.getElementById("result2").innerText = "Result of subtraction: " + result;
}

// Function for multiplication
function multiplicationFunction() {
    var result = 4 * 6;
    document.getElementById("result3").innerText = "Result of multiplication: " + result;
}

// Function for modulus
function modulusFunction() {
    var result = 10 % 3;
    document.getElementById("result4").innerText = "Result of modulus: " + result;
}

// Function for increment
function incrementFunction() {
    var num = 5;
    num++;
    document.getElementById("result5").innerText = "Result of increment: " + num;
}

// Function for decrement
function decrementFunction() {
    var num = 8;
    num--;
    document.getElementById("result6").innerText = "Result of decrement: " + num;
}

// Function utilizing Math.random()
function randomFunction() {
    var result = Math.random();
    document.getElementById("result7").innerText = "Random number: " + result;
}

