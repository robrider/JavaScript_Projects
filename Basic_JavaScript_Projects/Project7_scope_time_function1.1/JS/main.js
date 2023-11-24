// Function to get Date and Hours
function getDate() {
  if (new Date().getHours() < 18) {
    alert("How are you today?");
  }
}

// Function to check time and display a message
function checkTime() {
  // Get the current hour using new Date().getHours()
  var currentHour = new Date().getHours();

  // Check if it's morning, afternoon, or evening
  if (currentHour < 12) {
    alert("Good morning!");
  } else if (currentHour < 18) {
    alert("Good afternoon!");
  } else {
    alert("Good evening!");
  }
}

function Age_Function() {
  Age = document.getElementById("Age").value;
  if (Age >= 18) {
    Vote = "You are old enough to vote! Get in that booth";
  }
  else {
    Vote = "You are not old enough to vote! However I do have some crayons for you.";
  }
  document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  }
  else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon.";
  }
  else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}

// Global variable
var X = 10;
function Add_numbers_1() { document.write(20 + X + "<br>"); }
function Add_numbers_2() {
  document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
  var X = 10;
  document.write(20 + X + "<br>");
}
function Add_numbers_2() {
  document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
  var X = 10;
  console.log(15 + X);
}
function Add_numbers_2() {
  console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

// Call the function
exampleFunction();


