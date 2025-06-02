function count_To_Ten(){
    // This function counts from 1 to 10 using a for loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br> " + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function length_property() {
    // This function calculates the length of a string and displays it in the HTML element with id "length"
    var text = "I am glad to be learning";
    var length = text.length;
    document.getElementById("length").innerHTML = "The length of the text is: " + length;
}

var Instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute"];
function for_Loop() {//
    // This function creates an array of musical instruments and displays them in the HTML element with id "List_of_Instruments"
    var content = "";
    for (var i = 0; i < Instruments.length; i++) {
        content += Instruments[i] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

function cat_pics(){
    // This function creates an array of cat pictures and displays a specific picture in the HTML element with id "Cat"
 var Cat_Pictures = [];
    Cat_Pictures[0] = "sleeping ";
    Cat_Pictures[1] = "playing ";
    Cat_Pictures[2] = "eating";
    Cat_Pictures[3] = "purring";
    document.getElementById("Cat").innerHTML = " In this picture, the cat is  " +  Cat_Pictures[2] + ".";
}

var houseTypes = ["Bungalow", "Duplex", "Apartment", "Villa", "Cottage"];
function Array_Function(){
    // This function creates an array of house types and displays them in the HTML element with id "Array"
    var content = "";
    for (var i = 0; i < houseTypes.length; i++) {
        content += houseTypes[i] + "<br>";
    }
    document.getElementById("Array").innerHTML = content;

}

function constant_function() {
    // This function demonstrates the use of a constant object and modifies its properties
    const Musical_Instrument = {type: "Guitar", brand: "Fender", color: "Black"};
    Musical_Instrument.color = "Blue"; // Changing the color property of the object
    Musical_Instrument.price = "$900"; // Adding a new property to the object
    document.getElementById("Constant").innerHTML = "The  cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + ".";
}

//demonstrates scope, use of var and let, and the concept of block scope
var testVarandLet = 82;
document.write("The value of testVarandLet is: " + testVarandLet + "<br>"); // Display the initial value of testVar

{
    let testVarandLet = 45; // Declare a block-scoped variable testLet
    document.write("The value of testVarandLet is: " + testVarandLet + "<br>"); // Display the value of testLet
}
document.write("The value of testVarandLet is: " + testVarandLet + "<br>"); // Display the value of testVar after the block

function pi_function() {
    // This function returns the value of pi
return Math.PI; // Return the value of pi
}

function displayPi() {
    // This function displays the value of pi in the HTML element with id "Demo"
    document.getElementById("Demo").innerHTML = "The value of pi is: " + pi_function(); // Display the value of pi in the HTML element with id "pi"
}

let car = {
    // This object represents a car with properties such as make, model, year, color, and a method to describe the car
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    description: function() {// This method returns a string describing the car
        // The this keyword is used to refer to the current object (car) and its properties.    
        return "The car is a " + this.year + " " + this.color + " " + this.make + this.model + ".";
    }
};

function displayCarDescription() {      
    document.getElementById("Car_Object").innerHTML = car.description(); // Display the car description in the HTML element with id "carDescription"
}

function BreakandContinue(){
    // This function demonstrates the use of break and continue statements in a loop
    let text = "";
    for (let i = 0; i < 10; i++) {// Loop from 0 to 9
        if (i === 3) {// Check if i is equal to 3
            text += "Skipping number 3<br>"; // Skip the number 3
            continue; // Skip the rest of the loop for this iteration
        }
        if (i === 7) {// Check if i is equal to 7
            text += "Breaking at number 7<br>"; // Break the loop when i is 7
            break; // Exit the loop
        }
        text += "Number: " + i + "<br>"; // Display the current number
    }
    document.getElementById("Break_and_Continue").innerHTML = text; // Display the text in the HTML element with id "Break_and_Continue"
}