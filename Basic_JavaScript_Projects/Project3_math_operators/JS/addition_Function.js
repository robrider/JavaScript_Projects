// Functions utilizing each of the mentioned operators
function operatorsFunction() {
    // Addition
    var result1 = 5 + 3;
    document.getElementById("result1").innerText = "Result of addition: " + result1;

    // Subtraction
    var result2 = 8 - 2;
    document.getElementById("result2").innerText = "Result of subtraction: " + result2;

    // Multiplication
    var result3 = 4 * 6;
    document.getElementById("result3").innerText = "Result of multiplication: " + result3;

    // Modulus
    var result4 = 10 % 3;
    document.getElementById("result4").innerText = "Result of modulus: " + result4;

    // Increment
    var num = 5;
    num++;
    document.getElementById("result5").innerText = "Result of increment: " + num;

    // Decrement
    var num2 = 8;
    num2--;
    document.getElementById("result6").innerText = "Result of decrement: " + num2;
}

// Function utilizing Math.random()
function randomFunction() {
    var result = Math.random();
    document.getElementById("result7").innerText = "Random number: " + result;
}

// Execute the functions. Structure & Order
operatorsFunction();
randomFunction();