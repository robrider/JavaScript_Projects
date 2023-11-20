// Function to check voting eligibility
function checkVotingEligibility() {
  var userAge = parseInt(prompt("Enter your age:"));
  var eligibilityMessage = userAge >= 18
    ? "You can vote! Get in that booth!"
    : "You are not old enough to vote, I have some crayons for you though!";
  alert(eligibilityMessage);
}

// Nested function
function nestedFunction() {
  alert('This is a nested function!');
}

// Function to invoke the nested function
function invokeNestedFunction() {
  nestedFunction();
}
