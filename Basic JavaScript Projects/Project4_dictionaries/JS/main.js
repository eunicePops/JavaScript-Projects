function mydictionary() {
  var dictionarydetails = {
    name: "Francis Duru",
    age: 30,
    city: "Barrie",
    gender: "male",
    designation: "Software Engineer",
  };
    document.getElementById("Dictionary").innerHTML = "The designation is: " + dictionarydetails.designation;// Accessing dictionary keys  
 }

 function mydictionaryChallenge() {
    var dictionarydetails = {
      name: "Grace Duru",
      age: 30,
      city: "Toronto",
      gender: "female",
      gender: "male",
      designation: "Software Engineer",
    };
    delete dictionarydetails.gender;
      document.getElementById("Dictionary2").innerHTML = "The gender is: " + dictionarydetails.gender;// Accessing dictionary keys  
   }