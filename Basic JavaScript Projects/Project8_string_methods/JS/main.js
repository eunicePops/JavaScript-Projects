 // The function full_sentence is defined to concatenate multiple string variables into a complete sentence and display it in the HTML element with id "Concatenate".
 function full_sentence() {
    var part_1 = "I have  ";
    var part_2 = "made this ";
    var part_3 = "into a complete  "; 
    var part_4 = "sentence"; // Declare and assign values to the variables  
    var whole_sentence = part_1.concat( part_2, part_3, part_4 ) // Concatenate all the  parts to form a complete sentence
    document.getElementById("Concatenate").innerHTML = whole_sentence; // Display the complete sentence in the HTML element with id "Concatenate"    
   }

   // The function slice_method is defined to extract a section of a sentence using the slice method and display it in the HTML element with id "Slice".
   function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33); // Extract a section of the sentence using the slice method
    document.getElementById("Slice").innerHTML = section; // Display the extracted section in the HTML element with id "Slice"  
   }

   //function toUpperCase_method is defined to convert the entire sentence to uppercase using the toUpperCase method.
   function toUpperCase_method() {
    var sentence = "All work and no play makes Johnny a dull boy";
    // The toUpperCase method converts the entire sentence to uppercase.
    var section = sentence.toUpperCase(); // Convert the entire sentence to uppercase using the toUpperCase method
    document.getElementById("Uppercase").innerHTML = section; // Display the uppercase sentence in the HTML element with id "UpperCase"
   }
   // the function toSearch_method is defined to search for a specific word in a sentence using the search method.
   function toSearch_method() {
    var sentence = "All work and no play makes Johnny a dull boy ";
    var section = sentence.search("Johnny"); // Search for the word "play" in the sentence using the search method, it returns the position of the first occurrence of the specified value in a string.
    // The search method returns the index of the first occurrence of the specified value in a string.
    document.getElementById("Search").innerHTML = section; // Display the index of the word "play" in the HTML element with id "Search" 
   }

    //function NumbersToString is defined to convert a number to a string using the toString method.
   function NumbersToString() {
    var x = 182;
    // The toString method converts a number to a string representation.
    document.getElementById("Numbers_to_String").innerHTML = x.toString(); // Convert the number to a string using the toString method and display it in the HTML element with id "NumbersToString"
   }

   //function toPrecision is defined to convert a number to a string with a specified precision using the toPrecision method.
   // The toPrecision method formats a number to a specified length, and it returns a string representation of the number.
   function ToPrecision() {    
    var x = 12938.30123456789112;
    // The toPrecision method formats a number to a specified length, and it returns a string representation of the number.
    document.getElementById("Numbers_to_Precision").innerHTML = "The intial number was 12938.30123456789112, the new number with prcision set to 10 is:  "+ x.toPrecision(10); // Convert the number to a string with a specified precision using the toPrecision method and display it in the HTML element with id "NumbersToPrecision"
   }

   //function toFixed is defined to convert a number to a string with a specified number of digits after the decimal point using the toFixed method.
   function ToFixed() {
    var x = 12938.30123456789112;// Declare and assign a value to the variable x
    // The toFixed method converts a number to a string with a specified number of digits after the decimal point.
    document.getElementById("Numbers_to_Fixed").innerHTML = "The initial number was 12938.30123456789112, the new fixed to 10 decimals is: " + x.toFixed(10); // Convert the number to a string with a specified number of digits after the decimal point using the toFixed method and display it in the HTML element with id "NumbersToFixed"
   }