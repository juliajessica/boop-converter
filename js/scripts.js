///backend logic
// var numberArray = number.toString();
// var numberArray = number.toString();
// var returnArray = ["Beep!", "Boop!", "Sorry!"];

// var convertToNumber = parseInt(numberArray[i]); //now number

// number = 0;
function beepBoop(number) {
  var outputNumber = [];


  for (var i=0;i<=number;i++) {
    console.log(number);
    debugger;
    if (parseInt(number[i]) === 0) { //true //if it contains a 0
      number = number.replace(number[i], "Beep!");
    } else if (parseInt(number[i]) === 1) {
      number = number.replace(number[i], "Boop!");
    } else if (parseInt(number[i]) === 3) {
      number = number.replace(number[i], "I'm sorry, Dave. I'm afraid I can't do that.");
    } return number;
  }
}


//user interface
$(document).ready(function(){
  $("form#beep-form").submit(function(event){
    event.preventDefault();
    debugger;
    var userInput = $("#userInput").val();
    var finalOutput = beepBoop(userInput);

    $("#output").text(finalOutput);
    $("#output").show();

  });
});
