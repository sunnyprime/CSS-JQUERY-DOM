// function hello(name){
//   console.log("Hello!" +name);
// }


//add num

function addnum(num1,num2){
  console.log(num1+num2);
}


function helloSomeone(name="Frankie"){
  console.log("Hello "+ name);
}

function timesFive(numInput) {
  // Local scope to the function!
    var result = numInput * 5
    return result
}

//Global scope
var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff){
  console.log(v);
  stuff = "Reassign stuff inside func"
  console.log(stuff);
}

fun()

console.log(stuff);
