//function returns the result of an addition 
function addition(){
    var addNum = 12 + 38;
    document.getElementById("Math").innerHTML = " 12 + 38 = " + addNum;
}

//The subtraction operator is used to subtract one number from another.
function subtraction(){
    var subNum = 45 - 38;
    document.getElementById("MathSubtract").innerHTML = " 45 - 38 = " + subNum;
}


//The multiplication operator is used to multiply two numbers together.
function multiply(){
    var mulNum = 5 * 3;
    document.getElementById("MathMultiply").innerHTML = " 5 * 3 = " + mulNum;
}

//The division operator is used to divide two numbers.
function division(){
    var divNum = 15 / 3;
    document.getElementById("MathDivision").innerHTML = " 15 / 3 = " + divNum;
}

//The addition operator is used to add two numbers together.
function more_Math(){
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("moreMath").innerHTML = " 1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

//The modulus operator is used to find the remainder of a division operation.
function modulus_Operator(){
    var modulus_Math = 25 % 6;
    document.getElementById("modulusMath").innerHTML = " When you divide 25 by 6 you have a remainder of: " + modulus_Math;
}

//The negation operator is used to negate a value, it is also known as the unary negation operator.
function negation_Operator(){
    var negation_Math = 25;
    document.getElementById("negationMath").innerHTML = " The negation of the value is: " + -negation_Math;
}

//The increment operator is used to increase the value of a variable by 1
function increment_Operator(){
var x = 5;
x++;
//document.write(x + "<br>");
document.getElementById("increment").innerHTML = "The value of x is: " + x + "<br>";
}

//The decrement operator is used to decrease the value of a variable by 1
function decrement_Operator(){
    var y = 5;
    y--;
   // document.write(y + "<br>");
    document.getElementById("decrement").innerHTML = "The value of y is: " + y + "<br>";
}
    
//Utilizing the random number function to generate a random number between 0 and 100
function randomNum(){
    var randomNum = Math.random() * 100;
    document.getElementById("randomNum").innerHTML = "The random number is: " + randomNum;
}

//Utilizing the Math.PI object to generate the area of a circle 
function AreaOfCircle(){
    var radius = 5;
    var area = Math.PI * Math.pow(radius, 2);
    document.getElementById("areaOfCircle").innerHTML = "The area of the circle is: " + area;
}
