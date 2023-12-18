function full Sentence() {
    var part 1 = "I have ";
    var part 2 = "made this ";
    var part 3 = "into a complete ";
    var part 4 = "sentence.";
    var whole sentence = part_1.concat(part 2, part 3, part 4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

<button onclick="slice_Method()">Click Here</button>

    functon slice_Method(){
    var Sentence = "Allwork and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 123.456789;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

            Original Number: 123.456789
            Formatted Number: 123.46
