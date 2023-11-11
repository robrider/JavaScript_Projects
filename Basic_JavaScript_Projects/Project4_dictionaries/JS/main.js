// Function to display a value from the dictionary

//Run these for the Dictionary submission

// Create a simple JavaScript dictionary
function my_Dictionary() {
    var Bicycle = {
        Terrain: "Dirt",
        Frame_Material:"Carbon fibre",
        Brand: "Cannondale",
        Groupo: "Shimano",
        Sound: "Ding"
    };
delete Bicycle.Sound;
//document.getElementById("Dictionary"). innerHTML="Hello, World";
document.getElementById("Dictionary"). innerHTML=Bicycle.Sound;
}
``
