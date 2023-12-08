// main.js

// Function to loop through the Instruments array and display them
function forLoop() {
    let Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    let Content = "";
    let Y;

    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Function to display cat pictures and their activities
function cat_pics() {
    let Cat_Picture = ["sleeping", "playing", "eating", "purring"];

    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

// Function to display array values using document.getElementById().innerHTML
function displayArrayValues() {
    let fruits = ["Apple", "Banana", "Orange", "Grapes", "Watermelon"];

    document.getElementById("arrayDisplay").innerHTML = "Fruits: " + fruits.join(", ");
}

// Function to display the value of PI
function displayPi() {
    document.getElementById("piDemo").innerHTML = Math.PI;
}

// Function to create and display a car object
function displayCarObject() {
    let car = {
        make: "Dodge",
        model: "Viper",
        year: 2021,
        color: "red",
        description: function () {
            return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model;
        }
    };

    document.getElementById("Car_Object").innerHTML = car.description();
}

// Call the displayCarObject function when the script is loaded
displayCarObject();

// JavaScript Loops
let loopText = "";
for (let i = 0; i < 10; i++) {
    if (i === 8) { break; }
    loopText += "The number is " + i + "<br>";
}

document.getElementById("loopDemo").innerHTML = loopText;

// JavaScript to set the length of the string "Hello World!"
let text = "Hello World!";
let length = text.length; // The length property returns the number of characters in a string
document.getElementById("demo").innerHTML = length;

// Call the examples when the script is loaded
exampleOne();
exampleTwo();

// Call the displayCarObject function when the script is loaded
displayCarObject();