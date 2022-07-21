const prompt = require("prompt-sync")();

let  digit=prompt("Enter a Single Digit Number : ")
switch (digit) {
    case "0":
      console.log("Sunday");
      break;
      
    case "1":
      console.log("Monday");
      break;

    case "2":
      console.log("Tuesday");
      break;

    case "3":
      console.log("Wednesday");
      break;

    case "4":
      console.log("Thrusday");
      break;

    case "5":
      console.log("Friday");
      break;

    case "6":
      console.log("Saturday");
      break;

    // Not single digit
    default:
        console.log("Invalid")
  }