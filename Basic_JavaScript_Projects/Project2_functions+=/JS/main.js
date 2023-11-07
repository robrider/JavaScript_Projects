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
function changeText() {
    var paragraph = document.getElementById("myParagraph");
    paragraph.innerHTML = "This paragraph is not the same as the other!";
}

// Call the function when the page loads
window.onload = concatenateText;

