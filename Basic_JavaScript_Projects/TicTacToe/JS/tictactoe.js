// Function to play audio
function audio(audioURL) {
    // Create an audio element
    let audio = new Audio(audioURL);
    // Play the audio
    audio.play();
}

// Function to disable clicking
function disableClick() {
    const tableCells = document.querySelectorAll('td');
    tableCells.forEach(cell => {
        cell.style.pointerEvents = 'none';
    });
}

// Function to enable clicking
function enableClick() {
    const tableCells = document.querySelectorAll('td');
    tableCells.forEach(cell => {
        cell.style.pointerEvents = 'auto';
    });
}

//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an X or O in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The.some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on. Version of the var ages combined with the arrow function.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML 
            select.style.backgroundImage = 'url("./images/x.png")';
            //Active player may only be 'X' or 'O'so, if not 'X' it must be 'O'
        } else {
            //If activePlayer is equal to '0', the o.png is placed in HTML 
            select.style.backgroundImage = 'url("./images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        // Call checkWinConditions after each move
        checkWinConditions();

        //This condition is for changing the active player.
        activePlayer = activePlayer === 'X' ? 'O' : 'X';
    
        //This function plays placement sound.
        audio('media/place.mp3');

        //This condition checks to see if it is the computers turn.
        if (activePlayer === 'O') {
            //This function disables clicking for computers turn.
            disableClick();
            //This function waits 1 second before the computer places an image and enables click.
            setTimeout(function () {
                computersTurn();
                enableClick(); // Make sure to enable click after the computer's turn.
            }, 1000);
        }

        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
}
    //This function results in a random sqaure being selected by the computer.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                // This changes our boolean and ends the loop.
                success = true;

            }
        }
        enableClick();
    }


    //This function parses the selectedSquares array to search for win conditions.
    //drawLine() function is called to draw a line on the screen if the condition is met.
    function checkWinConditions() {
    // Χ 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // Χ 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    //O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    //O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    
    //This condition checks for a tie. If none of the above conditions are met and 
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 1000);
    }
    // ... (previous code)

    //This function checks if an array includes 3 strings. It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {
            return true;
        }
       
    }

}
    
    // Function to draw a line on the canvas for a winning combination.
function drawWinLine (coordX1, coordY1, coordX2, coordY2) { // animation function 
const canvas = document.getElementById("win-lines");
const c = canvas.getContext("2d");
let x1 = coordX1, // starting x coordinate
    y1 = coordY1, // starting y coordinate
    x2 = coordX2, // ending x coordinate
    y2 = coordY2, // ending y coordinate
    x = x1, // placeholder
    y = y1; // placeholders:
    
    function animateLineDrawing() { // logic for animation
        const animationLoop = requestAnimationFrame (animateLineDrawing); 
        c.clearRect(0, 0, 600, 608)
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = "rgba(70, 70, 255, 0.5)";
        c.stroke();
        if (x1 <= x2 && y1 <=y2) { // conditions for vertical and horizontal animation
        if  (x < x2) {x += 10};
        if (y < y2) {y += 10};
        if (x >= x2 && y >= y2) {cancelAnimationFrame (animationLoop);}
        //clear();  // Call clear function after animation is complete
        }
        if (x1 <= x2 && y1 >= y2) { // conditions for diagonal animation
        if (x < x2) {x += 10;}
        if (y > y2) {y -= 10;}
        if (x >= x2 && y <= y2) {cancelAnimationFrame (animationLoop);} 
        }
    }


    function clear() { // function that clears the animation when the game is reset const animationLoop requestAnimationFrame (clear); c.clearRect(0, 0, 608, 608);
        const animationLoop = requestAnimationFrame (clear);
        c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame (animationLoop);
    }
    disableClick()
    audio("media\\polite_applause_09.wav");
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//This function resets the game in the event of a tie or a win.
function resetGame() {
    //This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        //This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage. 
        square.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
    // Reset the active player to 'X'.
    //activePlayer = 'X';
    // Enable clicking for the next move.
    enableClick();
}
