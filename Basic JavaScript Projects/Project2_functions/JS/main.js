function assign2Variables(){
    //Assigning var1 and var2
    let var1 = 2;
    let var2 =3;
    //multiplying variables and placing their value in the variable result
   let result = var1 * var2;

   //Using the getElementById in displaying the result of the two variables
    document.getElementById("Button_Text").innerHTML = result;
}

//function to use operator 
function conCat(){
    var sentence = "I am learning";
    sentence += "a lot from this book!";
    document.getElementById("Concat").innerHTML = sentence;
}

//function to add numbers 
function addition(){
    var addNum = 2 + 3;
    document.getElementById("AddMath").innerHTML = " 2 + 2 = " + addNum;
}