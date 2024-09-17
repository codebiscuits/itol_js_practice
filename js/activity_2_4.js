// using a built-in function:
alert("Page loaded");

// switch/case statements
const animal = "cat"

console.log("how many legs does a " + animal + " have?");

switch (animal) {
  case "chicken":
    console.log(2);
    break;
  case "cat":
    console.log(4);
    break;
  case "beetle":
    console.log(6);
    break;
  case "spider":
    console.log(8);
    break;
}

// declaring globally scoped variables with var:
var x = 10;
var y = 20;
var z = 30;

// defining a named function
function calc() {
  var myList = []; // declaring a function scoped list
  console.log(myList);

  const n = 1000 // declaring a block scoped variable with const
  let a = x + y + z; // declaring a block scoped variable with let
  let b = x * y * z / n;

  myList.push(a)
  myList.push(b)
  console.log(myList);

  if (myList[0] != myList[1]) {
    console.log("The two results are different")
  } else {
    console.log("The two results are the same")
  }
}

function looper() {
  var myList = ["tree", "cone", "furniture"]; // declaring a function scoped variable with var

  for (i = 0; i < myList.length; i++) {
    let oldValue = myList[i] // declare block scoped variable that can be reassigned
    myList[i] = "pine " + oldValue;
  }

  console.log(myList);
}

// defining and calling anonymous functions
function anonFuncs() {
  var anonFuncList = [
    function () {
      console.log("called anonymous function 1");
    },
    function () {
      console.log("called anonymous function 2");
    }
  ];

  for (i = 0; i < anonFuncList.length; i++) {
    anonFuncList[i]();
  }
}
