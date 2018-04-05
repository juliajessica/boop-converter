// user interface
$(document).ready(function(){
  $("form#beep-form").submit(function(event){
    event.preventDefault();
    debugger;

    var userName = $("input#name").val();
    var userInput = parseInt($("#userInput").val());
    var finalOutput = beepBoop(userInput);

    $("#userOutput").text(finalOutput);
    $(".user-name").text(userName);
    $("#output").show();
    $("#beep-form")[0].reset();

  });
});

///backend logic
function beepBoop(number) {
  var outputNumberArray = [];

  for (var i=0;i<=number;i++) {
    // var i = number.toString();
    if (i % 3 === 0 && i !== 0){
      outputNumberArray.push(" I'm sorry, Dave. I'm afraid I can't do that!");
    } else if (i === 1) {
      outputNumberArray.push(" Boop!");
    } else if (i === 0) {
      outputNumberArray.push(" Beep!");
    } else {
      outputNumberArray.push(' ' + i);
    }
  }
  return outputNumberArray;
  return userName;
}

// function beepBoop(userInput) {
//   var numberDigit = userInput.toString();
//   // var numberDigit = parseInt(userInput);
//   var outputNumber = [];
//
//   for (var i=0;i<=numberDigit.length;i++) {
//
//     if (numberDigit[i] === 0) {
//     numberDigit = numberDigit.replace(numberDigit[i], "Beep!");
//     numberDigit = [i].toString().replace(numberDigit[i], "Beep!");
//     // outputNumber.push("Beep!");
//     numberDigit.push("Beep!");
//     }
//   }
// }
//   return numberDigit + "beep";
//
// } beepBoop(20);
