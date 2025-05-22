
// This is a simple JavaScript program that demonstrates the use of global and local variables, as well as the concept of functions. It includes a function to add numbers and display the result in HTML elements.
// The global variable x is declared and assigned a value of 10.
var x = 10;
//function to add 20 to the global variable x and display the result in the HTML element with id "AddingNumbers".
function AddNumbers() {
    document.getElementById("AddingNumbers").innerHTML = (x + 20 ); // true
}
AddNumbers(); // Call the function to execute it

// The function AddNumbers1 is defined to add 15 to the global variable x and display the result in the HTML element with id "AddingNumbers1".
function AddNumbers1() {
    document.getElementById("AddingNumbers1").innerHTML = (x + 65 ); // true
}
AddNumbers1(); // Call the function to execute it

//The function AddNumbers2 is defined to add 5 to a local variable Y and display the result in the HTML element with id "AddingNumbers2".
function AddNumbers2() {
    var Y = 20; // Local variable Y is declared and assigned a value of 20

    document.getElementById("AddingNumbers2").innerHTML = (Y + 5); // true
}
AddNumbers2(); // Call the function to execute it

//The function AddNumbers3 is defined to add 5 to a local variable Y and display the result in the console. However, Y is not defined in this scope, so it will throw an error.
function AddNumbers3() {
   
    document.getElementById("AddingNumbers2").innerHTML = console.log(Y + 5); // This will throw an error because Y is not defined in this scope
}

AddNumbers3(); // Call the function to execute it


if (1 < 2){
    document.write("The left number is smaller than the number on the right<br>");
}


// The function get_Date is defined to display a greeting message based on the current time of day. If the current hour is less than 18, it displays "How are you today?", otherwise it displays "Good day!".
function get_Date(){
    // Date object is created to get the current date and time
    // The getHours() method is used to get the current hour (0-23) from the Date object.
    if (new Date().getHours() < 18){
        document.getElementById("Greeting").innerHTML = "How are you today?";   
    } else {
        document.getElementById("Greeting").innerHTML = "Good day!";
    }
}


function if_Function() {
var name = "John"; // Global variable name is declared and assigned a value of "John"
if (name == "John"){
    document.getElementById("conditional").innerHTML = "Hello John!";
    } else {
        document.getElementById("conditional").innerHTML = "Hello Stranger!";
    }
}

function userif_Function() {
    var name = document.getElementById("nameInput").value.trim();

    // Check if the name is "Joy" or starts with A-E (case insensitive)
    if (name.toLowerCase() === "joy" || /^[a-e]/i.test(name)) {
        // Capitalize the first letter
        name = name.charAt(0).toUpperCase() + name.slice(1);
        document.getElementById("conditions").innerHTML = "Hello " + name + "!";
    } else if (name === "") {
        document.getElementById("conditions").innerHTML = "Please enter your name.";
    } else {
        document.getElementById("conditions").innerHTML = "Hello " + name + ", Stranger!";
    }
    }

    function Ageif_Function(){
        Age = document.getElementById("Age").value;
        if (Age >= 18){
            Vote = "You are old enough to vote"     
        } else {
            Vote = "You are not old enough to vote"
        }
        document.getElementById("How_Old_Are_You").innerHTML = Vote;     

    }

    function TimeOfDay_Function() {
        var Time = new  Date().getHours(); // Get the current hour (0-23)
        var reply; // Variable to store the reply
        // Check the time of day and set the reply accordingly  
        if (Time < 12 == Time > 0) {
            reply = "It is morning time!";
            } else if (Time >= 12 == Time < 18) {
            reply = "It is afternoon time!";    

            } else  {
            reply   = "It is evening time!";     }
        // Display the reply in the HTML element with id "Time_of_day"
        document.getElementById("Time_of_Day").innerHTML = reply;
        }

    // The function full_sentence is defined to concatenate multiple string variables into a complete sentence and display it in the HTML element with id "Concatenate".
   function full_sentence() {
    var part_1 = "I have  ";
    var part_2 = "made this ";
    var part_3 = "into a complete  "; 
    var part_4 = "sentence"; // Declare and assign values to the variables  
    var whole_sentence = part_1.concat( part_2, part_3, part_4 ) // Concatenate all the  parts to form a complete sentence
    document.getElementById("Concatenate").innerHTML = whole_sentence; // Display the complete sentence in the HTML element with id "Concatenate"    
   }

   function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33); // Extract a section of the sentence using the slice method
    document.getElementById("Slice").innerHTML = section; // Display the extracted section in the HTML element with id "Slice"  
   }

   function toUpperCase_method() {
    var sentence = "All work and no play makes Johnny a dull boy";
    var section = sentence.toUpperCase(); // Convert the entire sentence to uppercase using the toUpperCase method
    document.getElementById("Uppercase").innerHTML = section; // Display the uppercase sentence in the HTML element with id "UpperCase"
   }

   function toSearch_method() {
    var sentence = "All work and no play makes Johnny a dull boy ";
    var section = sentence.search("Johnny"); // Search for the word "play" in the sentence using the search method, it returns the position of the first occurrence of the specified value in a string.
    document.getElementById("Search").innerHTML = section; // Display the index of the word "play" in the HTML element with id "Search" 
   }


   function NumbersToString() {
    var x = 182;
    document.getElementById("Numbers_to_String").innerHTML = x.toString(); // Convert the number to a string using the toString method and display it in the HTML element with id "NumbersToString"
   }

   function ToPrecision() {    
    var x = 12938.30123456789112;
    document.getElementById("Numbers_to_Precision").innerHTML = "The intial number was 12938.30123456789112, the new number with prcision set to 10 is:  "+ x.toPrecision(10); // Convert the number to a string with a specified precision using the toPrecision method and display it in the HTML element with id "NumbersToPrecision"
   }

   function ToFixed() {
    var x = 12938.30123456789112;// Declare and assign a value to the variable x
    document.getElementById("Numbers_to_Fixed").innerHTML = "The initial number was 12938.30123456789112, the new fixed to 10 decimals is: " + x.toFixed(10); // Convert the number to a string with a specified number of digits after the decimal point using the toFixed method and display it in the HTML element with id "NumbersToFixed"
   }