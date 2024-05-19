import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the oprators to perform action",
    type: "list",
    name: "oprator",
    choices: ["Addition", "Subtraction", "Mutiplication", "Division"],
  },
]);
// conditional statement 

if (answer.oprator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.oprator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
 else if(answer.oprator === "Mutiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
 else if(answer.oprator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator")
}