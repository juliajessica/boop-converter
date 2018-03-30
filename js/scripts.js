///backend logic

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

    $("#output").append(finalOutput);
    $("#output").show();


  });
});
