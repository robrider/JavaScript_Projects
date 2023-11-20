// Function to check voting eligibility
function checkVotingEligibility() {
  var userAge = document.getElementById("userInput").value;
  var eligibilityMessage = userAge >= 18
    ? "You can vote! Get in that booth!"
    : "You are not old enough to vote, I have some crayons for you though!";
 document.getElementById('vote').innerHTML=eligibilityMessage;
}

function vehicle(make,color){
  this.vehiclemake=make;
  this.vehiclecolor=color;
}

var robert=new vehicle("jeep","blue");

function myfunction(){
  document.getElementById('car').innerHTML= "My Car is a " + robert.vehiclecolor + " " + robert.vehiclemake;
}

    // Nested Function
function MyNestedFunction() {
  document.getElementById("nested_function").innerHTML = Count();
  function Count() {
      return 5+5;
  }
}
MyNestedFunction();


/* Leftovers from PROJECT6_TERNARY__OPERATORS_CONSTRUCTORS ASSIGNMENTS
// Constructor Function
    function ExampleConstructor(value) {
      this.value = value;
      this.square = function() {
        return this.value * this.value;
      };
    }

    // Function to check voting eligibility
    function checkVotingEligibility() {
      var userAge = parseInt(prompt("Enter your age:"));
      var eligibilityMessage = userAge >= 18
        ? "You can vote! Get in that booth!"
        : "You are not old enough to vote, I have some crayons for you though!";
      alert(eligibilityMessage);
    }

    // Display Results Function
    function displayResults() {
      var inputElement = document.getElementById('userInput');
      var inputValue = parseInt(inputElement.value);

      // Use the constructor with the 'new' keyword
      var exampleObject = new ExampleConstructor(inputValue);

      // Display the result in an HTML element
      var resultDisplay = document.getElementById('resultDisplay');
      resultDisplay.innerHTML = 'Square of ' + inputValue + ' is: ' + exampleObject.square();
    }

    // Nested Function
    function processInput() {
      // Perform some processing before displaying the result
      displayResults();
    }
F
// Constructor Function
function ExampleConstructor(value) {
  this.value = value;
  this.square = function() {
    return this.value * this.value;
  };
}



// Display Results Function
function displayResults() {
  var inputElement = document.getElementById('userInput');
  var inputValue = parseInt(inputElement.value);

  // Use the constructor with the 'new' keyword
  var exampleObject = new ExampleConstructor(inputValue);

  // Display the result in an HTML element
  var resultDisplay = document.getElementById('resultDisplay');
  resultDisplay.innerHTML = 'Square of ' + inputValue + ' is: ' + exampleObject.square();
}

// Nested Function
function processInput() {
  // Perform some processing before displaying the result
  displayResults();
} */
