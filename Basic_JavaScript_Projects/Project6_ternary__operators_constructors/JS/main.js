// Function to check voting eligibility
function checkVotingEligibility() {
  // Get user's age from the input
  var userAge = parseInt(prompt("Enter your age:"));

  // Use ternary operator to check eligibility
  var eligibilityMessage = userAge >= 18 ? "You can vote! Get in that booth!" : "You are not old enough to vote, I have some crayons for you though!";

  // Display the result
  alert(eligibilityMessage);
}

// Call the function when the page loads
checkVotingEligibility();

// Nested function
function nestedFunction() {
  alert('This is a nested function!');
}

// Function to invoke the nested function
function invokeNestedFunction() {
  // Accessing the <p> element by its ID
  let paragraph = document.getElementById('nestedFunction');

  // Calling the nested function when the <p> element is clicked
  paragraph.onclick = function () {
    nestedFunction();
  };
}

