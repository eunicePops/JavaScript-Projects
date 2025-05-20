function typeOfComparison() {
    document.writeln(typeof "word");
    document.write(typeof 3);
}

function typeOfCoercion() {
    document.write("50" + 3);
}

function notANum(){
    document.getElementById("NaN").innerHTML = 0/0;
    document.getElementById("NaN2").innerHTML = isNaN("This is a string");
    document.getElementById("NaN3").innerHTML = isNaN("This is a number 1234");
}
function positiveInfinity(){
    document.getElementById("positiveInfinity").innerHTML = document.write(2E310);
}
function negativeInfinity(){
    document.getElementById("negativeInfinity").innerHTML = document.write(-2E310);
}
function booleanLogic(){
    document.getElementById("boolean").innerHTML = document.write(-10 < -2 && 5 < 10); 

}
console.log(2+2);
//Boolean challenge
console.log(2 == 2 && 3 == 3); // true
document.write(10 == 10); // true

function equality(){

    document.getElementById("checkequality").innerHTML = document.write(10 == 10); // true 

}
function tripleEqual(){
    var x = 10;
    var y = 10;

   var a = 82;
   var b = "flying";

 var   c = 90;
  var  d = "90";

  var  e= 100;
   var f= 1100;

    document.getElementById("tripleEqual").innerHTML = `"x === y" is ${x === y}`;  
    document.getElementById("tripleEqual2").innerHTML = `"a === b" is ${a === b}` 
    document.getElementById("tripleEqual3").innerHTML = `"c === d" is ${c === d}` 
    document.getElementById("tripleEqual4").innerHTML = `"e === f" is ${e === f}`
}

function logicalOperators(){
    var x = 10;
    var y = 20;
    var z = 30;
    var a = 40;
    var b = 50;
    var c = 60;

    document.getElementById("logicalOperators").innerHTML = (x < y && y < z && z < a && a < b && b < c); // true
    document.getElementById("logicalOperators2").innerHTML = (x > y && y > z && z > a && a > b && b > c); // false
    document.getElementById("logicalOperators3").innerHTML = (x > y || y > z || z > a || a > b || b > c); // false
    document.getElementById("logicalOperators4").innerHTML = (x < y || y < z || z < a || a < b || b < c); // true
}

function not_Operator(){
    document.getElementById("Not").innerHTML = ! (20 > 10);
    document.getElementById("Not2").innerHTML = ! (5 > 10);//

}