// Function to display a value from the dictionary
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
//document.getElementById("Dictionary"). innerHTML="Hello, World"; entry to follow the path of the program!
document.getElementById("Dictionary"). innerHTML=Bicycle.Sound;
}
``
