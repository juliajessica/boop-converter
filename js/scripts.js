///backend logic
// var numberArray = number.toString();

// var convertToNumber = parseInt(numberArray[i]); //now number

function beepBoop(number) {
  var outputNumber = [];
  var numberDigit = parseInt(number);
  debugger;
  for (var i=0;i<=numberDigit.length;i++) {
      // console.log(i);

    if ( < 1 ) { //true //if it contains a 0

      // return numberDigit + "beep";
      // numberDigit = [i].toString().replace(numberDigit[i], "Beep!");
      // numberDigit.replace(numberDigit[i], "Beep!");
      return numberDigit + "Beep!";
      return userName;
      // debugger;
      // console.log(numberDigit);
     }

    }
}
  // }   beepBoop(20);

  // if (parseInt(number[i]) === 0) { //true //if it contains a 0
  //   number = number.replace(number[i], "Beep!");
  //   debugger; }
//       console.log(number);
//     } else if (parseInt(number[i]) === 1) {
//       number = number.replace(number[i], "Boop!");
//     } else if (parseInt(number[i]) % 3 == 0) {
//       number = number.replace(number[i], "I'm sorry, Dave. I'm afraid I can't do that.");
//       console.log(number);
//     } return number;
//       return userName;
//   }
// }

// user interface
$(document).ready(function(){
  $("form#beep-form").submit(function(event){
    event.preventDefault();
    debugger;
    var userInput = $("#userInput").val();
    var userName = $("input#name").val();
    var finalOutput = beepBoop(userInput);

    $("#userOutput").text(finalOutput);
    $(".user-name").text(userName);
    $("#output").show();

  });
});
