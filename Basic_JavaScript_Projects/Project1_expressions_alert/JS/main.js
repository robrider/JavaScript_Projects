//Var three
var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", 
    Daughter = "Penny", Son = "Zorro"; 
document.write (Dad + "<br>");

document.write(3 + 3 + "<br>");

// Create two variables
var Sent1 = "This is the beginning of the string";
var Sent2 = " and this is the end of the string";

//  Alt Concatenate the Sent1 and Sent2 variables
var concatenatedSentence = Sent1 + Sent2;

// Display the concatenated sentence
console.log(concatenatedSentence);

// Function that uses the += operator
function concatenateText() {
    // Concatenating additional text to the existing content
    var originalText = "Initial text.";
    var additionalText = " This is additional text.";
    originalText += additionalText; // Using the += operator

    // Displaying the concatenated text in the HTML element
    var displayElement = document.getElementById("displayText");
    displayElement.innerHTML = originalText;
}

// Call the function when the page loads
window.onload = concatenateText;

// Function that uses the += operator
function concatenateText() {
    // Concatenating additional text to the existing content
    var originalText = "Initial text.";
    var additionalText = " This is additional text.";
    originalText += additionalText; // Using the += operator

    // Displaying the concatenated text in the HTML element
    var displayElement = document.getElementById("displayText");
    displayElement.innerHTML = originalText;
}

// Call the function when the page loads
window.onload = concatenateText;
