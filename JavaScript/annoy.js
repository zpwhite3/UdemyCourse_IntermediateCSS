//var answer = prompt("Are we there yet?");

//while(!answer == "yes" && answer !== "yeah"){
 // var answer = prompt("Are we there yet?");
//}

//alert("Yay, we made it!")

// if(answer === "yes") {
//   alert("YAY, we made it!")
// }

//Version 2

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
  var answer = prompt("are we there yet?")
}

alert("Yay, we made it!");