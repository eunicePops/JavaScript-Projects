// This is a simple JavaScript program that uses Ternary Operators to determine 
// if a person can ride a roller coaster based on their height and if they can vote based on their age.
function Ride_function(){
    // the var Height and Can_ride variables are declared
    var Height, Can_ride;
    //  and assigned values from the HTML input element with id "Height"
    Height = document.getElementById("Height").value;
    // The Can_ride variable is assigned a value based on the height of the person using a ternary operator.
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    // The result is displayed in the HTML element with id "Ride"
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// This function checks if a person is old enough to vote based on their age using a ternary operator.
function Voting_Requirement(){
    // The var Age and Voting variables are declared
    var Age, Voting;
    // The Age variable is assigned a value from the HTML input element with id "Age"
    Age = document.getElementById("Age").value;
    // The Voting variable is assigned a value based on the age of the person using a ternary operator.
    Voting = (Age < 18) ? "You are not old enough ":"You are old enough ";
    // The result is displayed in the HTML element with id "Admitted"
    document.getElementById("Admitted").innerHTML = Voting + " to vote.";
}

// a function name vehicle_function is created to create a vehicle object using the constructor function Vehicle
function Vehicle(Make, Model, Year, Color){
    // The constructor function Vehicle takes four parameters: Make, Model, Year, and Color.
    this.Vehicle_Make = Make;
    // The this keyword is used to refer to the current object being created.
    this.Vehicle_Model = Model;
    //The this keyword is used to refer to the current object being created.
    this.Vehicle_Year = Year;
    // The this keyword is used to refer to the current object being created.
    // The properties of the object are assigned values based on the parameters passed to the constructor function.
    this.Vehicle_Color = Color;
}

// Creating three instances of the Vehicle object using the constructor function Vehicle.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// The function vehicle_function is created to display the properties of the Vehicle object in the HTML element with id "Keywords_and_constructors".
function vehicle_function() {
    document.getElementById("Keywords_and_constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;

    document.getElementById("New_and_This").innerHTML =
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
}

function Person(First, Last, Age, Height, Weight, Eye){
    this.First_Name = First;
    this.Last_Name = Last;
    this.Age = Age;
    this.Height = Height;
    this.Weight = Weight;
    this.Eye_Color = Eye;
}
    //creating a person object
  function showPerson(){
    
    const myMum = new Person("Eunice", "Duru", 65, 5.5, 150, "Brown");

    //Displaying the person object in the HTML element with id "person"

    document.getElementById("person").innerHTML = "My mum is " + myMum.First_Name + " " + myMum.Last_Name + ", she is " + myMum.Age + " years old, " + myMum.Height + " feet tall, weighs " + myMum.Weight + " pounds and has " + myMum.Eye_Color + " eyes.";
}

//creating a nested function to count
function count_Function(){
    //
    document.getElementById("Counting").innerHTML = Count();
    //creating a  function  to count
    function Count(){
        var Starting_point = 9;
        function Plus_one(){
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;
    }
}