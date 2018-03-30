///backend logic
// var numberArray = number.toString();

// var convertToNumber = parseInt(numberArray[i]); //now number




// function beepBoop(userInput) {
//   var numberDigit = userInput.toString();
//   // var numberDigit = parseInt(userInput);
//   var outputNumber = [];
//
//   for (var i=0;i<=numberDigit.length;i++) {
//
//
//     if (numberDigit[i] === 0) {
//       numberDigit = numberDigit.replace(numberDigit[i], "Beep!");
//       // outputNumber.push("Beep!");
//       numberDigit.push("Beep!");
//       debugger;
//     }
//   }
// }
// } beepBoop(20);
//////////////////////////////
function beepBoop(number) {

  var numberDigit = number.toString();
  var outputNumber = [];

  for (var i=0;i<=numberDigit.length;i++) {
    // var numberDigit = parseInt(numberDigit);
    debugger;
    console.log(numberDigit);

    if (numberDigit[i] === 0) {
      numberDigit.replace(numberDigit[i], "Beep!");  // number = number.replace(number[i], "Beep!");
      }  else if (number[i] === 1) {
        numberDigit.replace(numberDigit[i], "Boop!");
      } else if (numberDigit[i] % 3 == 0) {
        numberDigit.replace(numberDigit[i], "I'm sorry, Dave. I'm afraid I can't do that.");
      }
      // } else {
      //   return numberDigit;
      // }
  }
  // numberDigit.push("Beep!");
  return numberDigit;
  return userName;
}
      // return numberDigit + "beep";   // numberDigit = [i].toString().replace(numberDigit[i], "Beep!");


/////////////////////////////
  // }   beepBoop(20);

  // if (parseInt(number[i]) === 0) { //true //if it contains a 0
  //   number = number.replace(number[i], "Beep!");
  //   debugger; }
//       console.log(number);


// user interface
// $(document).ready(function(){
//   $("form#beep-form").submit(function(event){
//     event.preventDefault();
//     debugger;
//
//     var userName = $("input#name").val();
//     var userInput = $("#userInput").val();
//     var finalOutput = beepBoop(userInput);
//
//     $("#userOutput").text(finalOutput);
//     $(".user-name").text(userName);
//     $("#output").show();
//
//   });
// });
