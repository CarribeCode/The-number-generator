//Setting the generator function to the button

document.getElementById("numGen").addEventListener("click", function() {
  var num1 = (document.getElementById("num1")).value;
  var num2 = (document.getElementById("num2")).value;
  var numberGen;
  if(num1 > num2){
    alert("HEY, GENIUS, the lower bound should be lower than the higher bound !");
  } else if(num1 > 0){
    numberGen = Math.ceil(Math.random() * (num2 - num1 + 1));
  } else if(num1 == 0){
    numberGen = Math.round(Math.random() * num2);
  } else if(num2 == num1){
    alert("You know the result :) , give a range with some numbers in between.");
  } else if( num1 < 0 || num2 < 0){
    alert("No negative values allowed here !!!")
  }

    document.getElementById("result").innerHTML = numberGen;
}
);
