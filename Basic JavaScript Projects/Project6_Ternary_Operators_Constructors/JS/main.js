function Ride_function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voting_Requirement(){
    var Age, Voting;
    Age = document.getElementById("Age").value;
    Voting = (Age < 18) ? "You are not old enough ":"You are old enough ";
    document.getElementById("Admitted").innerHTML = Voting + " to vote.";
}

function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function vehicle_function() {
    document.getElementById("Keywords_and_constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

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

//creating a nested function to c
function count_Function(){
    document.getElementById("Counting").innerHTML = Count();
    function Count(){
        var Starting_point = 9;
        function Plus_one(){
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;
    }
}