//Main.JS Begin test
function changeText() {
    var paragraph = document.getElementById("myParagraph");
    paragraph.innerHTML = "This paragraph text has been changed!";
}

var additionalText = " This is additional text.";
var paragraph = document.getElementById("myParagraph");
paragraph.innerHTML += additionalText;