var firstName = prompt("First Name Please: ")
var lastName = prompt("Last Name please: ")
var age = prompt("How old are you? ")
var height = prompt("What is your height? ")
var petName = prompt("What is your pet name? ")
alert("Thank you so much for the information")

//LOGIC

//Four conditions
var nameCond =null;
var ageCond = null;
var heightCond = null;
var petCond = null;

// NAME conditions
if (firstName[0] === lastName[0]) {
  nameCond = true;
} else {
  nameCond = false;
}


// AGE conditions

if (age > 20 && age < 30) {
  ageCond = true;
}else{
  ageCond = false;
}

// height conditions
if (height >= 170) {
  heightCond = true;
}else {
  heightCond = false;
}

//Pet NAME

if (petName[petName.length-1]==="y") {
  petCond=true;

}else {
  petCond=false;
}

//Check all conditions
if (nameCond && ageCond && heightCond && petCond) {
    console.log("Welcome Spy!");
}else {
  console.log("Nothing to see here");
}
